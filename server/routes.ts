import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express) {
  // API routes will be added here as needed
  // For now, this is a frontend-only app
  
  const httpServer = createServer(app);
  return httpServer;
}
