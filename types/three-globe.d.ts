// types/three-globe.d.ts
declare module 'three-globe' {
    import { Object3D } from 'three';
  
    interface CityData {
      name: string;
      lat: number;
      lng: number;
      description?: string;
      status?: string;
      brand?: string;
      population: number;
    }
  
    interface HexPolygonData {
      coordinates: [number, number][];
      properties?: Record<string, unknown>;
    }
  
    interface LabelData {
      lat: number;
      lng: number;
      text: string;
      color?: string;
      size?: number;
    }
  
    class ThreeGlobe extends Object3D {
      // Basic Globe Configuration
      globeImageUrl(url: string): this;
      bumpImageUrl(url: string): this;
      atmosphereColor(color: string): this;
      atmosphereAltitude(altitude: number): this;
  
      // Points Configuration
      pointsData<T extends CityData>(data: T[]): this;
      pointColor<T extends CityData>(callback: (d: T) => string): this;
      pointAltitude(altitude: number): this;
      pointRadius(radius: number): this;
      pointsMerge(merge: boolean): this;
  
      // Labels Configuration
      labelsData<T extends LabelData>(data: T[]): this;
      labelText<T>(callback: (d: T) => string): this;
      labelColor<T>(callback: (d: T) => string): this;
      labelAltitude(altitude: number): this;
      labelSize<T>(callback: (d: T) => number): this;
      labelResolution(resolution: number): this;
  
      // Rings Configuration
      ringsData<T extends CityData>(data: T[]): this;
      ringColor<T extends CityData>(callback: (d: T) => string): this;
      ringMaxRadius(radius: number): this;
      ringPropagationSpeed(speed: number): this;
      ringRepeatPeriod(period: number): this;
  
      // Hex Polygons Configuration
      hexPolygonsData(data: HexPolygonData[]): this;
      hexPolygonColor(color: string | ((d: HexPolygonData) => string)): this;
      hexPolygonAltitude(altitude: number | ((d: HexPolygonData) => number)): this;
      hexPolygonResolution(resolution: number): this;
      hexPolygonMargin(margin: number): this;
    }
  
    export default ThreeGlobe;
  }