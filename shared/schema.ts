import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Example schema - not currently used by the app
// This is a placeholder for future database needs
export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const insertExampleSchema = createInsertSchema(examples).omit({ id: true });
export type InsertExample = z.infer<typeof insertExampleSchema>;
export type Example = typeof examples.$inferSelect;
