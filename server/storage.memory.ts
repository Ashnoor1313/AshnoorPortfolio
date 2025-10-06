import { type IStorage } from "./storage";
import { type User, type InsertUser, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "node:crypto";

export class MemoryStorage implements IStorage {
  private users: User[] = [];
  private contactMessages: ContactMessage[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    const created: User = { id: randomUUID(), createdAt: new Date(), updatedAt: new Date(), ...user } as unknown as User;
    this.users.push(created);
    return created;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const created: ContactMessage = { id: randomUUID(), createdAt: new Date(), ...message } as unknown as ContactMessage;
    this.contactMessages.push(created);
    return created;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return this.contactMessages.slice().sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}




