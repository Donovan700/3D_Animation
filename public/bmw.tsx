import { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

//npm install react-three-fiber three @react-three/drei

const MyScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

const Model = () => {
  const gltf = useLoader(GLTFLoader, './bmw.gltf');
  return <primitive object={gltf.scene} />;
};

export default MyScene;
