import { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Layout = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas className="w-1/2 h-1/2 border-4 border-gray-800">
        <ambientLight intensity={10} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Model = () => {
  const path = './206.gltf';
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} />;
};

export default Layout;
