import { db } from "./db";
import {
  bookingRequests,
  type CreateBookingRequest,
  type BookingResponse
} from "@shared/schema";

export interface IStorage {
  getBookings(): Promise<BookingResponse[]>;
  createBooking(booking: CreateBookingRequest): Promise<BookingResponse>;
}

export class DatabaseStorage implements IStorage {
  async getBookings(): Promise<BookingResponse[]> {
    return await db.select().from(bookingRequests);
  }

  async createBooking(booking: CreateBookingRequest): Promise<BookingResponse> {
    const [created] = await db.insert(bookingRequests).values(booking).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
