import React from 'react';
import { useCityImage } from '../lib/api';

export default function TestCityImage() {
  const { imageData, isLoading, error } = useCityImage('Paris', 'France');

  if (isLoading) {
    return <div className="p-4 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading image: {error.message}</div>;
  }

  if (!imageData) {
    return <div className="p-4 text-white">No image data found</div>;
  }

  return (
    <div className="p-4">
      <img 
        src={imageData.url} 
        alt={imageData.altDescription}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-sm text-white/60 mt-2">
        Photo by{' '}
        <a 
          href={imageData.photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          {imageData.photographer}
        </a>
      </p>
    </div>
  );
}