import {
  pgTable,
  text as pgText,
  serial,
  boolean as pgBoolean,
  timestamp as pgTimestamp,
} from "drizzle-orm/pg-core";
import {
  sqliteTable,
  text as sqliteText,
  integer as sqliteInteger,
} from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

const isLocal = (typeof process !== 'undefined' && process.env?.DATABASE_URL?.startsWith("file:")) ?? false;

export const bookingRequests = isLocal
  ? sqliteTable("booking_requests", {
      id: sqliteInteger("id", { mode: "number" })
        .primaryKey({ autoIncrement: true }),
      name: sqliteText("name").notNull(),
      phone: sqliteText("phone").notNull(),
      email: sqliteText("email").notNull(),
      type: sqliteText("type").notNull(), // 'Tattoo' only
      description: sqliteText("description").notNull(),
      size: sqliteText("size").notNull(),
      placement: sqliteText("placement").notNull(),
      preferredArtist: sqliteText("preferred_artist").notNull(), // 'Hector', 'Mark', 'Any'
      referenceUrl: sqliteText("reference_url"),
      preferredDate: sqliteText("preferred_date").notNull(),
      isAdult: sqliteInteger("is_adult", { mode: "boolean" }).notNull(),
      createdAt: sqliteInteger("created_at", { mode: "timestamp" }).defaultNow(),
    })
  : pgTable("booking_requests", {
      id: serial("id").primaryKey(),
      name: pgText("name").notNull(),
      phone: pgText("phone").notNull(),
      email: pgText("email").notNull(),
      type: pgText("type").notNull(), // 'Tattoo' only
      description: pgText("description").notNull(),
      size: pgText("size").notNull(),
      placement: pgText("placement").notNull(),
      preferredArtist: pgText("preferred_artist").notNull(), // 'Hector', 'Mark', 'Any'
      referenceUrl: pgText("reference_url"),
      preferredDate: pgText("preferred_date").notNull(),
      isAdult: pgBoolean("is_adult").notNull(),
      createdAt: pgTimestamp("created_at").defaultNow(),
    });

export const insertBookingRequestSchema = createInsertSchema(bookingRequests).omit({ 
  id: true, 
  createdAt: true 
});

export type BookingRequest = typeof bookingRequests.$inferSelect;
export type InsertBookingRequest = z.infer<typeof insertBookingRequestSchema>;

export type CreateBookingRequest = InsertBookingRequest;
export type BookingResponse = BookingRequest;
export type BookingsListResponse = BookingRequest[];
