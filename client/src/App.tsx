// src/App.tsx
import { ErrorBoundary } from './components/ErrorBoundary';
import { CityGrid } from './components/CityGrid';
import { popupCities } from './data/popupCities';

export default function App() {
  return (
    <ErrorBoundary>
      <CityGrid cities={popupCities} />
    </ErrorBoundary>
  );
}