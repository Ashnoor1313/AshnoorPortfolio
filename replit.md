# Ashnoor Singh AI Portfolio

## Overview

This is a modern, full-stack personal portfolio website for Ashnoor Singh, an AI Engineer and Data Scientist. The application showcases professional experience, projects, skills, and contact information through a cutting-edge AI-themed interface with glassmorphism effects, particle animations, and gradient accents. Built with React, TypeScript, and Express, the portfolio emphasizes visual sophistication while maintaining clean, maintainable code architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system extending shadcn/ui components
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

**Design System**
- Custom color palette with dark mode emphasis featuring electric blue (hsl(195 100% 50%)) and neon purple (hsl(270 70% 65%)) accents
- Typography hierarchy using Poppins (headings), Inter (body), and JetBrains Mono (code)
- Glassmorphism effects with backdrop blur and semi-transparent backgrounds
- Custom CSS utilities for hover effects, elevations, and gradient animations
- Responsive spacing system based on Tailwind's default scale

**Component Architecture**
- Page-level components (`portfolio.tsx`, `not-found.tsx`) manage route rendering
- Feature-based section components (`hero-section.tsx`, `about-section.tsx`, etc.) handle individual portfolio sections
- Shared UI components from shadcn/ui library provide consistent design patterns
- Custom hooks (`use-scroll-animation.ts`, `use-mobile.tsx`) encapsulate reusable logic
- `AIBackground` component implements canvas-based particle animation system

**Key Features**
- Scroll-triggered section animations using Intersection Observer API
- Responsive navigation with mobile menu support
- Animated particle background with mouse interaction
- Smooth scroll-to-section navigation
- Copy-to-clipboard functionality for contact information
- Scroll-to-top button with visibility threshold

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript for type safety
- ESM module system for modern JavaScript features
- Custom middleware for request logging with duration tracking
- Centralized error handling middleware

**Development vs Production**
- Vite integration in development mode with HMR support
- Static file serving in production from built assets
- Conditional loading of Replit-specific development plugins (cartographer, dev-banner)
- Server-side rendering preparation through custom Vite setup

**API Structure**
- Routes registered through `registerRoutes` function returning HTTP server instance
- API prefix convention (`/api/*`) for backend endpoints
- Storage abstraction layer for potential database integration

**Build Process**
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM with external packages
- Type checking via TypeScript compiler without emission

### Data Storage Solutions

**Current Implementation**
- In-memory storage (`MemStorage` class) implementing `IStorage` interface
- User schema defined with Drizzle ORM for future database migration
- CRUD operations abstracted behind storage interface for easy swapping

**Database Preparation**
- Drizzle ORM configured for PostgreSQL (Neon serverless driver)
- Schema defined in `shared/schema.ts` with Zod validation
- Migration system configured via `drizzle.config.ts`
- Environment-based database URL configuration
- User table with UUID primary keys and unique username constraint

**Design Rationale**
The in-memory storage allows rapid development and testing while maintaining a clean separation that enables seamless migration to PostgreSQL when needed. The Drizzle ORM provides type-safe database queries and automatic schema validation through Zod.

### Authentication and Authorization

**Current State**
No authentication implemented. The portfolio is a public-facing website showcasing work and contact information.

**Future Considerations**
User schema includes username and password fields, suggesting potential for admin panel or contact form with authentication. The storage interface supports user lookup by ID and username, enabling future auth implementation.

## External Dependencies

### UI Component Library
- **shadcn/ui**: Comprehensive React component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and keyboard navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe variant styling for component APIs

### Data Fetching & State
- **TanStack React Query**: Server state management with caching and invalidation
- **React Hook Form**: Form validation with Zod resolvers
- **Zod**: TypeScript-first schema validation

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for type-safe database queries
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Animation & Visual Effects
- **Canvas API**: Custom particle animation system in `AIBackground` component
- **Intersection Observer API**: Scroll-triggered section animations
- **CSS animations**: Tailwind-based transitions and transforms

### Development Tools
- **Vite**: Build tool with HMR and plugin ecosystem
- **TypeScript**: Static type checking across frontend and backend
- **ESLint/Prettier**: Code quality and formatting (configured via Replit plugins)
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit
- **@replit/vite-plugin-dev-banner**: Development mode indicator

### Typography
- **Google Fonts**: Poppins, Inter, and JetBrains Mono font families loaded via CDN

### Icons
- **Lucide React**: Icon library providing consistent SVG icons throughout the application

### Build & Deployment
- **esbuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
- **date-fns**: Date manipulation utilities