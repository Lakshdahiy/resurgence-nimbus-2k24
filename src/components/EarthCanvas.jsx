import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import "./EarthCanvas.css";

const Earth = () => {
    const earth = useGLTF("../models/planet/scene.gltf");
    earth.scene.scale.set(2, 2, 2);

    return <primitive object={earth.scene} />;
};

export default function EarthCanvas() {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
            style={{ width: "400px", height: "100%" }}
        >
            <Suspense fallback={<>loading...</>}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    );
}
