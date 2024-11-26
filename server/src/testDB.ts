import dotenv from 'dotenv';
dotenv.config();  // Add this at the top

import { db } from '../db';
import { cities } from '../db/schema';
import { eq } from 'drizzle-orm';

async function testConnection() {
  try {
    await db.insert(cities).values({
      name: 'Test City',
      country: 'Test Country',
      monthlyPrice: 1000,
      temperature: 25,
      internetSpeed: 100,
      imageUrl: 'test.jpg',
      weather: 'Sunny',
      score: 5
    });
    
    const allCities = await db.select().from(cities);
    console.log('Cities in database:', allCities);
  } catch (error) {
    console.error('Database error:', error);
  }
}

testConnection();