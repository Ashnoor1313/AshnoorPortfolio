import { type User, type InsertUser, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

let chosen: IStorage;

if (process.env.DATABASE_URL) {
  const { DatabaseStorage } = await import("./storage.db");
  chosen = new DatabaseStorage();
} else {
  const { MemoryStorage } = await import("./storage.memory");
  chosen = new MemoryStorage();
}

export const storage: IStorage = chosen;
