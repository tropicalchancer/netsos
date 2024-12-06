require('dotenv').config();

/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};