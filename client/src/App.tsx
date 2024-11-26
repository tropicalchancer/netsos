// src/App.tsx
import { CityGrid } from './components/CityGrid';
import { popupCities } from './data/popupCities';

export default function App() {
  return <CityGrid cities={popupCities} />;
}