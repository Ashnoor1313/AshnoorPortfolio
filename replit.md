# Ashnoor Singh - Portfolio Website

## Overview

This is a professional, full-stack portfolio website built for Ashnoor Singh, an AI/ML engineering student from GGSIPU. The application features a dark-themed, animated frontend showcasing real projects, experience, and achievements. It includes sections for about, projects, skills, education, experience, certifications, and contact information with a functional contact form and backend API integration.

## Recent Changes (January 2025)

✓ Updated all portfolio content with authentic data from Ashnoor's resume
✓ Added real project information: PotatoGuard (Potato Disease Classifier), QR Code Authenticator
✓ Integrated actual work experience: Data Analyst Intern at To Let Globe, AI Masters Lead at IEEE GTBIT
✓ Updated education details: GGSIPU B.Tech CSE (2023-2027) with 9.28 CGPA
✓ Added authentic certifications: Data Science and Analytics, Python and Machine Learning
✓ Updated contact information and social media links for Ashnoor Singh
✓ Personalized skills section based on actual technical expertise
✓ Removed admin section for privacy - contact messages are now private to backend only
✓ Implemented PostgreSQL database with proper schema for secure message storage
✓ Enhanced contact form responsiveness for mobile and tablet devices
✓ Fixed syntax errors in Hero and Projects components
✓ Connected GitHub repositories to projects section with proper links
✓ Fixed navbar scrolling and overlap issues with proper section spacing
✓ Created production-ready Dockerfile and deployment configuration for Render
✓ Added comprehensive deployment documentation and environment setup

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, featuring a component-based architecture with:
- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom dark theme and gradient colors
- **Animations**: Framer Motion for scroll-triggered animations and interactive elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and data fetching
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
The backend follows a REST API pattern using:
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL database schema
- **Data Storage**: Dual storage implementation (memory storage for development, database for production)
- **Validation**: Zod schemas for type-safe data validation
- **Development Tools**: Vite for development server and hot module replacement

### Database Design
The application uses PostgreSQL with two main entities:
- **Users**: Basic user management with username/password fields
- **Contact Messages**: Stores contact form submissions with fields for name, email, subject, and message

### Component Structure
The frontend is organized into logical sections:
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Animated introduction with social links and call-to-action
- **Content Sections**: About, Projects, Skills, Education, Experience, Certifications
- **Contact Form**: Interactive form with backend integration
- **UI Components**: Reusable shadcn/ui components for consistent design

### Build System
- **Development**: Vite dev server with HMR and TypeScript support
- **Production**: Separate build process for client and server bundles
- **Database**: Drizzle migrations for schema management

## External Dependencies

### Core Framework Dependencies
- **React**: Frontend framework with TypeScript support
- **Express**: Node.js web application framework
- **Vite**: Build tool and development server

### Database & ORM
- **Drizzle ORM**: TypeScript-first ORM for database operations
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **PostgreSQL**: Production database (configured for Neon)

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives for accessibility
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### Data Management
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema validation

### Development Tools
- **TypeScript**: Type safety and development tooling
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Deployment & Platform
- **Replit**: Development and hosting platform integration
- **Neon**: Serverless PostgreSQL database hosting