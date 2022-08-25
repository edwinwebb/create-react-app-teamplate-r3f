import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas>
      <mesh position={[0,0,-5]} rotation={[0, 0, 0]}>
        <torusGeometry args={[4, 0.5, 16, 32]} />
        <meshBasicMaterial wireframe color="green" />
      </mesh>
    </Canvas>
  );
}

export default App;
