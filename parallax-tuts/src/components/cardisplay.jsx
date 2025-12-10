"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import img1 from "../assets/car-engine (2).png";

import img2 from "../assets/steering-wheel.png";

import img3 from "../assets/speedometer.png";

import img4 from "../assets/people.png";

import img5 from "../assets/horse-power.png";

import img6 from "../assets/rotate.png";

// Import the exact image you uploaded

import backgroundImage from "../assets/1490.jpg";

const carData = {
  luxury: {
    name: "Tesla Model S ",
    speed: "200 mph",
    top_speed: "1.99 sec",
    engine: "Electric Dual Motor",
    steer: "Electronic Power Steering",
    description:
      "The pinnacle of electric luxury SUVs, featuring falcon-wing doors, premium interior craftsmanship, and cutting-edge autonomous driving capabilities. Offers exceptional comfort for seven passengers with zero emissions.",
    capacity: "7 Seats",
    power: "1020 HP",
    torque: "1050 lb-ft",
  },
  sports: {
    name: "Bugatti Chiron",
    speed: "261 mph",
    top_speed: "1.99 sec",
    engine: "8.0L W16 Quad-Turbo",
    steer: "Hydraulic Power Steering",
    description:
      "A hypercar masterpiece delivering 1,500 horsepower with unmatched speed and precision. Hand-crafted excellence combined with aerodynamic perfection, representing the absolute peak of automotive engineering and luxury.",
    capacity: "2 Seats",
    power: "1500 HP",
    torque: "1180 lb-ft",
  },
  performance: {
    name: "Bugatti Veyron",
    speed: "253 mph",
    top_speed: "1.99 sec",
    engine: "8.0L W16 Quad-Turbo",
    steer: "Hydraulic Power Steering",
    description:
      "The legendary supercar that redefined performance benchmarks. With its iconic quad-turbo engine and breathtaking acceleration, the Veyron remains a symbol of extreme performance and automotive innovation.",
    capacity: "2 Seats",
    power: "1500 HP",
    torque: "1180 lb-ft",
  },
  safety: {
    name: "Tesla Model S",
    speed: "149 mph",
    top_speed: "1.99 sec",
    engine: "Electric Tri Motor",
    steer: "Electronic Power Steering",
    description:
      "The world's safest sedan with a 5-star safety rating in every category. Advanced autopilot, reinforced battery protection, and multiple airbags ensure maximum protection while delivering exhilarating electric performance.",
    capacity: "5 Seats",
    power: "1020 HP",
    torque: "1050 lb-ft",
  },
};

export default function CarViewer() {
  const containerRef = useRef(null);
  const modelsRef = useRef({});
  const [selectedCategory, setSelectedCategory] = useState("luxury");

  const carPaths = {
    luxury: "/static/tesla/scene.gltf",
    sports: "/static/chevrolette/scene.gltf",
    performance: "/static/bugatti/scene.gltf",
    safety: "/static/ford/scene.gltf",
  };

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();

    // === SET YOUR UPLOADED IMAGE AS BACKGROUND ===
    const loader = new THREE.TextureLoader();
    loader.load(
      backgroundImage,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        scene.background = texture;
        scene.environment = texture;
      },
      undefined,
      (err) => console.error("Error loading background texture:", err)
    );

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(6, 0.2, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0.3, 0);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Lighting
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1);
    fillLight.position.set(-8, 6, -5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x88ccff, 2);
    rimLight.position.set(0, 4, -10);
    scene.add(rimLight);

    // === CREATE PLATFORM FOR CAR ===
    const platformOffsetZ = -1.5;
    const platformOffsetX = -1;

    const platformGeometry = new THREE.CylinderGeometry(6, 6, 0.3, 64);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.3,
      roughness: 0.2,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.set(platformOffsetX, -2.15, platformOffsetZ);
    platform.castShadow = true;
    platform.receiveShadow = true;
    scene.add(platform);

    const edgeGeometry = new THREE.TorusGeometry(6, 0.05, 16, 100);
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      emissive: 0xdddddd,
      emissiveIntensity: 1,
      metalness: 1,
      roughness: 0,
    });
    const edgeGlow = new THREE.Mesh(edgeGeometry, edgeMaterial);
    edgeGlow.position.set(platformOffsetX, -2, platformOffsetZ);
    edgeGlow.rotation.x = Math.PI / 2;
    scene.add(edgeGlow);

    const innerCircle = new THREE.Mesh(
      new THREE.CylinderGeometry(5.25, 5.25, 0.05, 64),
      new THREE.MeshStandardMaterial({
        color: 0xf5f5f5,
        metalness: 0.5,
        roughness: 0.1,
      })
    );
    innerCircle.position.set(platformOffsetX, -1.98, platformOffsetZ);
    scene.add(innerCircle);

    const pedestalGeometry = new THREE.CylinderGeometry(6.3, 6.75, 0.5, 64);
    const pedestalMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.4,
      roughness: 0.3,
    });
    const pedestal = new THREE.Mesh(pedestalGeometry, pedestalMaterial);
    pedestal.position.set(platformOffsetX, -2.5, platformOffsetZ);
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(6.45 - i * 0.15, 0.02, 8, 50),
        new THREE.MeshStandardMaterial({
          color: 0xcccccc,
          emissive: 0xcccccc,
          emissiveIntensity: 0.5,
        })
      );
      ring.position.set(platformOffsetX, -2.3 - i * 0.1, platformOffsetZ);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
    }

    // GLTF Loader for cars
    const gltfLoader = new GLTFLoader();

    Object.keys(carPaths).forEach((key) => {
      gltfLoader.load(carPaths[key], (gltf) => {
        const car = gltf.scene;

        // --- AUTO SCALE CAR TO FIT PLATFORM ---
        const box = new THREE.Box3().setFromObject(car);
        const size = new THREE.Vector3();
        box.getSize(size);

        const targetSize = 11.5;
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = targetSize / maxDim;

        car.scale.setScalar(scaleFactor);

        // --- RECENTER CAR CORRECTLY ---
        const newBox = new THREE.Box3().setFromObject(car);
        const center = new THREE.Vector3();
        newBox.getCenter(center);

        const bottomY = newBox.min.y;
        const platformTopY = -2;
        const sceneOffsetZ = 0.5;

        car.position.set(
          -center.x + platformOffsetX,
          -bottomY + platformTopY,
          -center.z + sceneOffsetZ + platformOffsetZ
        );

        // Shadows + materials
        car.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) child.material.envMapIntensity = 1.5;
          }
        });

        car.visible = key === selectedCategory;

        modelsRef.current[key] = car;
        scene.add(car);
      });
    });

    // Resize handler
    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const activeCar = modelsRef.current[selectedCategory];
      if (activeCar) activeCar.rotation.y += 0.003;

      platform.rotation.y += 0.002;
      innerCircle.rotation.y -= 0.003;
      edgeGlow.material.emissiveIntensity =
        1 + Math.sin(Date.now() * 0.002) * 0.3;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    Object.keys(modelsRef.current).forEach((key) => {
      if (modelsRef.current[key]) {
        modelsRef.current[key].visible = key === category;
      }
    });
  };

  const currentCar = carData[selectedCategory];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 -z-10" />

      {/* DESKTOP/TABLET VIEW */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen p-6 md:p-8 lg:p-12 xl:p-12 z-20 gap-8 lg:gap-12 items-center pt-8 md:pt-12 lg:pt-16">
        {/* Left Column - Title and Category Buttons */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10 col-span-1">
          <h2 className="text-4xl audiowide-regular md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 drop-shadow-lg leading-tight">
            {currentCar.name}
          </h2>

          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            {["luxury", "sports", "performance", "safety"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-3.5 rounded-lg font-medium text-xs md:text-sm lg:text-base transition-all shadow-lg capitalize w-full md:w-44 lg:w-48 ${
                  selectedCategory === cat
                    ? "bg-white text-black shadow-xl scale-105"
                    : "bg-white/20 backdrop-blur-md text-white hover:bg-white/40 hover:shadow-lg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Center Column - Empty on medium, specs on larger */}
        <div className="hidden lg:flex flex-col justify-center items-center col-span-1"></div>

        {/* Right Column - Specs Grid */}
        <div className="space-y-6 md:col-span-2 lg:col-span-1 lg:row-span-2">
          <div>
            <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-300 uppercase tracking-wider mb-4 lg:mb-6">
              Specifications
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-3">
              {/* Speed Spec */}
              <div className="rounded-xl shadow-lg border border-gray-300 bg-white/20 backdrop-blur-sm p-3 md:p-4 lg:p-3 flex flex-col justify-between hover:bg-white/30 transition-all">
                <img
                  src={img3 || "/placeholder.svg"}
                  alt="Speed"
                  className="w-6 md:w-7 lg:w-6 mb-2 lg:mb-1"
                />
                <div>
                  <span className="text-xs md:text-sm lg:text-xs text-gray-200">
                    Speed
                  </span>
                  <p className="font-bold text-sm md:text-base lg:text-sm text-gray-800">
                    {currentCar.top_speed}
                  </p>
                </div>
              </div>

              {/* Engine Spec */}
              <div className="rounded-xl shadow-lg border border-gray-300 bg-white/20 backdrop-blur-sm p-3 md:p-4 lg:p-3 flex flex-col justify-between hover:bg-white/30 transition-all">
                <img
                  src={img1 || "/placeholder.svg"}
                  alt="Engine"
                  className="w-6 md:w-7 lg:w-6 mb-2 lg:mb-1"
                />
                <div>
                  <span className="text-xs md:text-sm lg:text-xs text-gray-200">
                    Engine
                  </span>
                  <p className="font-bold text-sm md:text-base lg:text-sm text-gray-800">
                    {currentCar.engine}
                  </p>
                </div>
              </div>

              {/* Steering Spec */}
              <div className="rounded-xl shadow-lg border border-gray-300 bg-white/20 backdrop-blur-sm p-3 md:p-4 lg:p-3 flex flex-col justify-between hover:bg-white/30 transition-all">
                <img
                  src={img2 || "/placeholder.svg"}
                  alt="Steering"
                  className="w-6 md:w-7 lg:w-6 mb-2 lg:mb-1"
                />
                <div>
                  <span className="text-xs md:text-sm lg:text-xs text-gray-200">
                    Steering
                  </span>
                  <p className="font-bold text-sm md:text-base lg:text-sm text-gray-800">
                    {currentCar.steer}
                  </p>
                </div>
              </div>

              {/* Capacity Spec */}
              <div className="rounded-xl shadow-lg border border-gray-300 bg-white/20 backdrop-blur-sm p-3 md:p-4 lg:p-3 flex flex-col justify-between hover:bg-white/30 transition-all">
                <img
                  src={img4 || "/placeholder.svg"}
                  alt="Capacity"
                  className="w-6 md:w-7 lg:w-6 mb-2 lg:mb-1"
                />
                <div>
                  <span className="text-xs md:text-sm lg:text-xs text-gray-200">
                    Capacity
                  </span>
                  <p className="font-bold text-sm md:text-base lg:text-sm text-gray-800">
                    {currentCar.capacity}
                  </p>
                </div>
              </div>

              {/* Power Spec */}
              <div className="rounded-xl shadow-lg border border-gray-300 bg-white/20 backdrop-blur-sm p-3 md:p-4 lg:p-3 flex flex-col justify-between hover:bg-white/30 transition-all">
                <img
                  src={img5 || "/placeholder.svg"}
                  alt="Power"
                  className="w-6 md:w-7 lg:w-6 mb-2 lg:mb-1"
                />
                <div>
                  <span className="text-xs md:text-sm lg:text-xs text-gray-200">
                    Power
                  </span>
                  <p className="font-bold text-sm md:text-base lg:text-sm text-gray-800">
                    {currentCar.power}
                  </p>
                </div>
              </div>

              {/* Torque Spec */}
              <div className="rounded-xl shadow-lg border border-gray-300 bg-white/20 backdrop-blur-sm p-3 md:p-4 lg:p-3 flex flex-col justify-between hover:bg-white/30 transition-all">
                <img
                  src={img6 || "/placeholder.svg"}
                  alt="Torque"
                  className="w-6 md:w-7 lg:w-6 mb-2 lg:mb-1"
                />
                <div>
                  <span className="text-xs md:text-sm lg:text-xs text-gray-200">
                    Torque
                  </span>
                  <p className="font-bold text-sm md:text-base lg:text-sm text-gray-800">
                    {currentCar.torque}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block lg:hidden xl:block pt-6 border-t border-white/10">
            <p className="hidden md:block lg:hidden xl:block text-sm text-gray-500 leading-relaxed italic">
              {currentCar.description}
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="sm:hidden absolute inset-0 flex flex-col justify-end z-20">
        {/* Mobile: Category Buttons */}
        <div className="flex justify-center gap-2 mb-4 px-4 pointer-events-auto">
          {["luxury", "sports", "performance", "safety"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all shadow capitalize ${
                selectedCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/30 backdrop-blur-sm text-white hover:bg-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile: Car Info Card - Premium dark design */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg p-6 rounded-t-3xl text-white pointer-events-auto space-y-5 border-t border-white/10 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {currentCar.name}
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              {currentCar.description}
            </p>
          </div>

          {/* Mobile: Specs Row - Updated styling */}
          <div className="flex justify-between items-center gap-3 py-4 bg-white/5 rounded-2xl px-3">
            <div className="flex-1 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center rounded-lg bg-white">
                <img
                  src={img3 || "/placeholder.svg"}
                  alt="Speed"
                  className="w-5"
                />
              </div>
              <p className="font-bold text-sm">{currentCar.top_speed}</p>
              <span className="text-xs text-gray-400">Speed</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex-1 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center rounded-lg bg-white">
                <img
                  src={img1 || "/placeholder.svg"}
                  alt="Engine"
                  className="w-5"
                />
              </div>
              <p className="font-bold text-sm">{currentCar.engine}</p>
              <span className="text-xs text-gray-400">Engine</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex-1 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center rounded-lg bg-white">
                <img
                  src={img2 || "/placeholder.svg"}
                  alt="Steering"
                  className="w-5"
                />
              </div>
              <p className="font-bold text-sm">{currentCar.steer}</p>
              <span className="text-xs text-gray-400">Steering</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center gap-3">
            <div className="flex-1 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center rounded-lg bg-white">
               <img
                  src={img4 || "/placeholder.svg"}
                  alt="Steering"
                  className="w-5"
                />
              </div>
              <p className="font-bold text-sm">{currentCar.capacity}</p>
              <span className="text-xs text-gray-400">Capacity</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex-1 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center rounded-lg bg-white">
                <img
                  src={img5 || "/placeholder.svg"}
                  alt="Steering"
                  className="w-5"
                />
              </div>
              <p className="font-bold text-sm">{currentCar.power}</p>
              <span className="text-xs text-gray-400">Power</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex-1 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center rounded-lg bg-white">
               <img
                  src={img6 || "/placeholder.svg"}
                  alt="Steering"
                  className="w-5"
                />
              </div>
              <p className="font-bold text-sm">{currentCar.torque}</p>
              <span className="text-xs text-gray-400">Torque</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-white to-gray-200 text-black py-3 rounded-xl font-semibold text-sm hover:from-gray-100 hover:to-gray-300 transition-all shadow-lg hover:shadow-xl">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}
