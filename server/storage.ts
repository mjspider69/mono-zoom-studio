import { type Example, type InsertExample } from "@shared/schema";

// Storage interface for future use
export interface IStorage {
  // Add methods as needed
}

// In-memory storage for now (app doesn't need persistence yet)
export class MemStorage implements IStorage {
  // Add methods as needed
}

export const storage = new MemStorage();
