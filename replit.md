# Simulyn - Arabic IT Training Platform

## Overview

Simulyn is a Jordanian startup specializing in simulated field training for university students in IT disciplines. The platform provides a safe learning environment where students can gain practical experience without the pressure of real clients or technical interviews. The application is built as a modern full-stack web application with Arabic language support and RTL (right-to-left) layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for development and build processes
- **Language Support**: Arabic-first with RTL layout support

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **API Design**: RESTful API with JSON responses

### Database Schema
- **contacts**: Stores contact form submissions with fields for name, email, university, message, and timestamp
- **users**: User management table (defined but not actively used in current implementation)
- **Migration Strategy**: Drizzle Kit for schema migrations

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with mobile-responsive hamburger menu
- **Hero Section**: Main landing area with call-to-action buttons
- **About Section**: Company information and key features
- **Services Section**: Four main service areas (Software Development, QA Testing, Cybersecurity, AI/Data)
- **FAQ Section**: Accordion-based frequently asked questions
- **Contact Form**: Form with validation for lead generation
- **Footer**: Company links and social media

### Backend Components
- **Route Handlers**: Express middleware for API endpoints
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Contact Management**: API endpoint for processing contact form submissions
- **Error Handling**: Global error handling middleware
- **Development Tools**: Vite integration for hot reloading

## Data Flow

1. **User Interaction**: Users interact with the Arabic-language interface
2. **Form Submission**: Contact forms are validated client-side using Zod schemas
3. **API Communication**: TanStack Query manages API calls with automatic retry and caching
4. **Data Persistence**: Form data is stored in PostgreSQL via Drizzle ORM
5. **User Feedback**: Toast notifications provide immediate feedback in Arabic

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with Radix UI components
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with Arabic font support (Tajawal, Cairo)
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns library

### Development Dependencies
- **Build Tools**: Vite with TypeScript support
- **Development Server**: Express with hot reloading
- **Code Quality**: TypeScript strict mode configuration
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reloading**: Automatic refresh on file changes
- **Database**: Local PostgreSQL or Neon development database
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles Express server for Node.js
- **Database**: Neon PostgreSQL production instance
- **Deployment**: Single-server deployment with static file serving

### Key Configuration Files
- **package.json**: Defines build scripts and dependencies
- **vite.config.ts**: Frontend build configuration with path aliases
- **drizzle.config.ts**: Database migration configuration
- **tsconfig.json**: TypeScript configuration with path mapping
- **tailwind.config.ts**: Styling configuration with Arabic font support

The application is designed for the Arabic-speaking market with comprehensive RTL support, custom theming, and culturally appropriate user experience patterns. The architecture supports both development and production environments with proper separation of concerns and scalable data management.