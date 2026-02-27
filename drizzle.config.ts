import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

const isLocal = process.env.DATABASE_URL.startsWith("file:");

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: isLocal ? "sqlite" : "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
