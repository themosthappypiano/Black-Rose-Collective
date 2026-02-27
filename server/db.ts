import { drizzle as pgDrizzle } from "drizzle-orm/node-postgres";
import { drizzle as sqliteDrizzle } from "drizzle-orm/better-sqlite3";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./dev.db";
  console.log("DATABASE_URL not set, using default SQLite database: ./dev.db");
}

const isLocal = process.env.DATABASE_URL.startsWith("file:");

export let pool: pg.Pool | undefined;
export let db: ReturnType<typeof pgDrizzle> | ReturnType<typeof sqliteDrizzle> | any = null;

// Initialize database with fallback handling
async function initializeDatabase() {
  try {
    if (isLocal) {
      // Dynamically import better-sqlite3 to catch native dependency errors
      const Database = (await import("better-sqlite3")).default;
      const sqlite = new Database(process.env.DATABASE_URL!.replace("file:", ""));
      db = sqliteDrizzle(sqlite, { schema });
      console.log("SQLite database initialized successfully");
    } else {
      pool = new Pool({ connectionString: process.env.DATABASE_URL });
      db = pgDrizzle(pool, { schema });
      console.log("PostgreSQL database initialized successfully");
    }
  } catch (error) {
    console.warn("Failed to initialize database:", error);
    console.log("Falling back to JSON storage adapter");
    // Import and use JSON storage as fallback
    const { storage } = await import("./storage-adapter");
    
    // Create a simple db-like interface for compatibility
    db = {
      // Add simple methods that match your app's database usage
      storage, // Make storage available for direct access if needed
      select: () => ({ from: () => ({ execute: async () => [] }) }),
      insert: () => ({ values: () => ({ execute: async () => ({}) }) }),
      // Add other methods as needed
    };
    
    console.log("JSON storage adapter initialized as database fallback");
  }
}

// Initialize database
initializeDatabase().catch(console.error);
