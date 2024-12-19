declare module 'three-globe' {
    import { Object3D } from 'three';
  
    interface CityData {
      name: string;
      lat: number;
      lng: number;
      population: number;
    }
  
    // Add this interface for hex polygon data
    interface HexPolygonData {
      coordinates: Array<[number, number]>;
      properties?: Record<string, unknown>;
    }
  
    class ThreeGlobe extends Object3D {
      constructor();
      
      globeImageUrl(url: string): this;
      bumpImageUrl(url: string): this;
      atmosphereColor(color: string): this;
      atmosphereAltitude(alt: number): this;
      pointsData(data: CityData[]): this;
      pointColor(callback: (d: CityData) => string): this;
      pointAltitude(alt: number): this;
      pointRadius(radius: number): this;
      pointsMerge(merge: boolean): this;
      // Update this line to use the new interface
      hexPolygonsData(data: HexPolygonData[]): this;
      hexPolygonResolution(resolution: number): this;
      hexPolygonMargin(margin: number): this;
      hexPolygonColor(callback: () => string): this;
      ringsData(data: CityData[]): this;
      ringColor(callback: (d: CityData) => string): this;
      ringMaxRadius(radius: number): this;
      ringPropagationSpeed(speed: number): this;
      ringRepeatPeriod(period: number): this;
    }
  
    export default ThreeGlobe;
  }