import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Bounds,
    Center,
    Environment,
    Html,
    OrbitControls,
    OrthographicCamera,
    useGLTF,
} from "@react-three/drei";

const ISO_POLAR = Math.acos(1 / Math.sqrt(3)); // ~54.7356°

function Model({ url }) {
    const { scene } = useGLTF(url, true);
    return (
        // Z-up (CAD) -> Y-up (three): lay model down like Onshape
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <primitive object={scene} />
        </group>
    );
}

export default function ModelViewer({ url, height = 420 }) {
    const style = useMemo(() => ({ height }), [height]);

    return (
        <div className="ModelViewer" style={style}>
            <Canvas>
                {/* Onshape-ish isometric: look from +X, -Y, +Z */}
                <OrthographicCamera
                    makeDefault
                    position={[3, -3, 3]}
                    zoom={80}
                    near={-1000}
                    far={1000}
                />

                <Suspense fallback={<Html center>Loading…</Html>}>
                    <Center>
                        <Bounds fit observe clip margin={1.2}>
                            <Model url={url} />
                        </Bounds>
                    </Center>

                    {/* Enhanced lighting setup */}
                    <directionalLight
                        position={[5, 10, 5]}
                        intensity={1.2}
                        castShadow
                        shadow-mapSize={[2048, 2048]}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    />
                    <directionalLight
                        position={[8, 12, 4]}
                        intensity={1.5}
                        castShadow
                    />
                    <directionalLight
                        position={[-4, 3, -2]}
                        intensity={0.3}
                        color="#4fc3f7"
                    />
                    <ambientLight intensity={0.1} />
                    <Environment preset="night" />
                </Suspense>

                {/* Slow autorotate; keep isometric pitch locked */}
                <OrbitControls
                    makeDefault
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.25}
                    minPolarAngle={ISO_POLAR}
                    maxPolarAngle={ISO_POLAR}
                />
            </Canvas>
        </div>
    );
}
