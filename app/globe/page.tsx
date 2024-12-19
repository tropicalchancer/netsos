'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import Globe from 'three-globe';
import { WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, AmbientLight, Color } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Card } from '@/components/ui/card';
import { popupCities } from '@/data/popup-cities';

interface CityData {
  name: string;
  lat: number;
  lng: number;
  description?: string;
  status?: string;
  brand?: string;
  population: number; // Added required population field
}

// Transform popup cities data into the format needed for the globe
const CITIES: CityData[] = popupCities.map(city => ({
  name: city.name,
  lat: city.location.latitude,
  lng: city.location.longitude,
  description: city.description,
  status: city.status,
  brand: city.brand,
  population: 100000 // Default population value since it's required by three-globe
}));

export default function GlobePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<Globe | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const sceneRef = useRef<Scene | null>(null);

  // Memoize cities data to prevent recreation on each render
  const citiesData = useMemo(() => CITIES, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Setup renderer
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Setup scene
    const scene = new Scene();
    scene.background = new Color(0x040d21);
    sceneRef.current = scene;

    // Setup camera
    const camera = new PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.z = 300;
    cameraRef.current = camera;

    // Add lights
    const ambientLight = new AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(100, 100, 100);
    scene.add(directionalLight);

    // Initialize globe
    const globe = new Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .atmosphereColor('#3a228a')
      .atmosphereAltitude(0.25)
      .pointsData(citiesData)
      .labelText((d: CityData) => `${d.name}: ${d.status || 'Active'}`) // Fixed pointLabel to labelText
      .pointColor((d: CityData) => d.status === 'UPCOMING' ? '#ffd700' : '#ff3300')
      .pointAltitude(0.1)
      .pointRadius(2)
      .pointsMerge(true)
      .hexPolygonsData([])
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`)
      .ringsData(citiesData)
      .ringColor((d: CityData) => d.status === 'UPCOMING' ? '#ffd700' : '#ff3300')
      .ringMaxRadius(5)
      .ringPropagationSpeed(1)
      .ringRepeatPeriod(1000);

    scene.add(globe);
    globeRef.current = globe;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    let frameId: number;

    // Animation loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cancelAnimationFrame(frameId);
    };
  }, [citiesData]); // Added citiesData to dependency array

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold mb-8">Network State Villages</h1>
        <Card className="w-full h-[600px] relative overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div ref={containerRef} className="w-full h-full" />
        </Card>
      </div>
    </main>
  );
}