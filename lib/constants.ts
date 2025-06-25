import { CityImage } from "./hooks";

export const DEFAULT_CITY_IMAGE: CityImage = {
  url: '/images/default-cityscape.jpg', // You'll need to add this image to your public folder
  photographer: {
    name: 'Netsos',
    username: 'netsos'
  },
  source: 'Fallback',
  altDescription: 'Default city image'
};

// Google Apps Script API Configuration
export const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' 