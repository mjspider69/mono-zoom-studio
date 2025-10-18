# Gumming4U - Marketing Agency Website

## Overview

Gumming4U is a modern, interactive marketing agency website featuring an innovative 3D scrolling experience. The application showcases the agency's services, portfolio, and company information through an immersive camera-lens themed navigation system. Built with React, Three.js, and modern web technologies, it delivers a cinematic user experience with smooth animations and responsive design.

## Recent Changes

**October 18, 2025**: Successfully migrated from Lovable to Replit fullstack template
- Restructured project to use client/server/shared directory architecture
- Set up Express.js backend with Vite middleware for development
- Migrated routing from react-router-dom to wouter
- Removed Supabase dependencies (not needed for this frontend-focused app)
- Configured Drizzle ORM with PostgreSQL (Neon) for future database needs
- Fixed tsx watch configuration to prevent infinite restart loops

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- SWC compiler plugin for faster React refresh during development

**3D Graphics & Animation**
- React Three Fiber (@react-three/fiber) for declarative 3D scene management using Three.js
- React Three Drei (@react-three/drei) for pre-built 3D helpers and utilities (ScrollControls, Html, useScroll)
- Custom camera controller implementing cinematic scrolling with lens roll effects
- 3D camera model that follows the viewport as users scroll through sections

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- Shadcn/ui design system providing pre-styled components
- TailwindCSS for utility-first styling with custom HSL color variables
- Class Variance Authority (CVA) for type-safe component variant management
- Framer Motion for page transitions and micro-interactions

**Routing & State Management**
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod resolvers for form validation (infrastructure ready)

**Project Structure**
- `/client` - All frontend code including components, pages, and assets
- `/client/src/components` - Reusable UI components and 3D elements
- `/client/src/components/sections` - Page section components (Hero, About, Solutions, Projects, Contact)
- `/client/src/components/ui` - Shadcn UI component library
- `/client/src/pages` - Route-level page components

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Custom middleware for request logging and error handling
- Development mode uses Vite middleware for HMR
- Production mode serves static assets from dist/public

**Development Setup**
- TSX watch mode for automatic server restart during development
- Separate TypeScript configurations for client (tsconfig.app.json) and server (tsconfig.node.json)
- Path aliases for clean imports (@/, @shared/, @assets/)

**Storage Layer**
- In-memory storage implementation (MemStorage class) as placeholder
- Storage interface defined for future expansion to persistent databases
- Currently frontend-only application with no active backend routes

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL via Neon serverless database
- WebSocket-based connection pooling using @neondatabase/serverless
- Schema defined in `/shared/schema.ts` for cross-environment type safety
- Migration files output to `/migrations` directory
- DATABASE_URL environment variable required but database not actively used yet

**Schema Design**
- Example schema table defined as placeholder for future data models
- Zod integration via drizzle-zod for runtime validation
- Type inference for Insert and Select operations

### External Dependencies

**UI & Design Libraries**
- Radix UI component primitives (accordion, dialog, dropdown, select, tabs, toast, etc.)
- Lucide React for consistent iconography
- TailwindCSS with PostCSS and Autoprefixer
- Custom font stack: Helvetica Neue, Helvetica, Arial, sans-serif

**3D Graphics**
- Three.js (via React Three Fiber) for WebGL rendering
- @react-three/drei for 3D utilities and helpers

**Database & ORM**
- Neon serverless PostgreSQL driver
- Drizzle ORM for type-safe database queries
- Drizzle Kit for schema migrations
- WebSocket support via ws package

**Developer Experience**
- ESLint with TypeScript configuration
- React Hooks and React Refresh plugins for fast development
- Lovable Tagger for component tracking in development mode

**Form Handling**
- React Hook Form for performant form state management
- @hookform/resolvers for validation schema integration
- Zod for runtime type validation

**Deployment Considerations**
- Vite build outputs to `/dist/public`
- Server entry point at `/server/index.ts`
- Environment-based configuration (development vs production)
- Static file serving in production mode