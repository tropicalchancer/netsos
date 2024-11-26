import { Request, Response } from 'express';
import { db } from '../db';

export const getCities = async (_req: Request, res: Response) => {
  try {
    const cities = await db.query.cities.findMany();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
};

export const getCityById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const city = await db.query.cities.findFirst({
      where: (cities, { eq }) => eq(cities.id, id),
    });
    
    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }
    
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch city' });
  }
};
