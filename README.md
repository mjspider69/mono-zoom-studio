# Gumming4U - 3D Camera Showcase

A modern, interactive marketing agency website featuring an innovative 3D scrolling experience. This application showcases services, portfolio, and company information through an immersive camera-lens themed navigation system.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Routing**: wouter
- **State Management**: TanStack Query
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (Neon), Drizzle ORM

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Getting Started

1. **Install dependencies**
```sh
npm install
```

2. **Start the development server**
```sh
npm run dev
```

The application will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run db:push` - Push database schema changes to PostgreSQL
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview the production build locally

## Project Structure

```
├── client/              # Frontend application
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── sections/  # Page section components
│   │   │   └── ui/        # shadcn UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and query client
│   │   ├── pages/       # Route-level page components
│   │   └── assets/      # Images and media files
│   └── index.html       # HTML entry point
├── server/              # Backend application
│   ├── index.ts         # Express server entry point
│   ├── vite.ts          # Vite middleware configuration
│   ├── routes.ts        # API route handlers
│   ├── storage.ts       # Storage interface
│   └── db.ts            # Database configuration
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle database schema
└── migrations/          # Database migration files
```

## Features

- **3D Camera Model**: Interactive camera that follows scroll position
- **Scroll-Based Navigation**: Navigate through sections with smooth scrolling
- **Responsive Design**: Works seamlessly across all device sizes
- **Modern UI**: Built with shadcn components and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion

## Environment Variables

Required environment variables (automatically configured in Replit):
- `DATABASE_URL` - PostgreSQL connection string
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE` - PostgreSQL credentials

## Deployment

This project is configured for deployment on Replit. The application runs on port 5000 and includes:
- Express server for production serving
- Vite for development with HMR
- PostgreSQL database support

## License

Private project - All rights reserved
