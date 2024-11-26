import { pgTable, serial, varchar, integer, text, timestamp } from 'drizzle-orm/pg-core';

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  country: varchar('country', { length: 255 }).notNull(),
  monthlyPrice: integer('monthly_price').notNull(),
  temperature: integer('temperature').notNull(),
  internetSpeed: integer('internet_speed').notNull(),
  imageUrl: text('image_url').notNull(),
  weather: varchar('weather', { length: 50 }).notNull(),
  score: integer('score').notNull(),
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});