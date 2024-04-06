import { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Environment } from '@react-three/drei';
import { LayoutProps } from './type';
import { ModelProps } from './type';

export default function Layout(props: LayoutProps) {
  const { path } = props;
  return(
    <>
      <div className="flex bg-gray-400 justify-center items-center h-screen">
        <Canvas className="w-1/2 h-1/2 border-4 border-gray-800">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Suspense fallback={null}>
            <Model path={path} />
          </Suspense>
          <Environment preset='sunset' />
        </Canvas>
      </div>
    </>
  )
}

function Model(props: ModelProps) {
  const { path } = props;
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} />;
}