import { useState, useEffect } from 'react';

interface UnsplashPhoto {
  id: string; // Added photo ID
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
}

interface CityImageData {
  id: string; // Added photo ID
  url: string;
  photographer: string;
  photographerUrl: string;
  altDescription: string;
}

// Add delay between requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
let lastRequestTime = 0;
const MIN_REQUEST_GAP = 500;

// New function to trigger download
async function triggerDownload(photoId: string) {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  try {
    await fetch(`https://api.unsplash.com/photos/${photoId}/download`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });
  } catch (error) {
    console.error('Error triggering download:', error);
  }
}

export async function fetchCityImage(city: string, country: string): Promise<CityImageData> {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  
  if (!accessKey) {
    throw new Error('Unsplash API key not found');
  }

  try {
    // Ensure minimum gap between requests
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    if (timeSinceLastRequest < MIN_REQUEST_GAP) {
      await delay(MIN_REQUEST_GAP - timeSinceLastRequest);
    }
    lastRequestTime = Date.now();

    // Try city first
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&orientation=landscape&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as UnsplashResponse;

    // If no results with city, try with country
    if (!data.results?.length) {
      await delay(MIN_REQUEST_GAP);
      lastRequestTime = Date.now();

      const countryResponse = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(country)}&orientation=landscape&per_page=1`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        }
      );

      const countryData = await countryResponse.json() as UnsplashResponse;
      if (countryData.results?.length) {
        const photo = countryData.results[0];
        return {
          id: photo.id,
          url: photo.urls.regular,
          photographer: photo.user.name,
          photographerUrl: photo.user.links.html,
          altDescription: photo.alt_description || `${city}, ${country}`
        };
      }
    } else {
      const photo = data.results[0];
      return {
        id: photo.id,
        url: photo.urls.regular,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
        altDescription: photo.alt_description || `${city}, ${country}`
      };
    }

    throw new Error('No images found');
  } catch (error) {
    console.error('Error fetching city image:', error);
    throw error;
  }
}

export function useCityImage(city: string, country: string) {
  const [imageData, setImageData] = useState<CityImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadImage = async () => {
      if (!city || !country || city === 'TBD' || country === 'TBD') {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await fetchCityImage(city, country);
        if (mounted) {
          setImageData(data);
          setError(null);
          // Trigger download when image is loaded
          if (data.id) {
            triggerDownload(data.id);
          }
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to load image'));
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      mounted = false;
    };
  }, [city, country]);

  return { imageData, isLoading, error };
}