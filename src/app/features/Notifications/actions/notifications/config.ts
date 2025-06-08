// src/lib/config.ts

export const JWT_TOKEN = process.env.JWT_TOKEN || '';
export const BASE_URL = process.env.BASE_URL || 'https://flower.elevateegy.com/api/v1';


if (!JWT_TOKEN) {
  console.warn('⚠️ Warning: JWT_TOKEN is not set in .env.local');
}
