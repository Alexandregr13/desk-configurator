import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import '../styles/DeskVisualizer.css';

// Composant de modèle de bureau simpliste avec Three.js
function DeskModel({ configuration }) {
  const { appearance, accessories, movableTable, deepWorkSafe } = configuration;
  
  return (
    <group>
      {/* Plateau de bureau */}
      <mesh position={[0, -0.4, 0]} receiveShadow castShadow>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial color={appearance.color} />
      </mesh>
      
      {/* Pieds du bureau */}
      <mesh position={[-1.3, -1, -0.6]} receiveShadow castShadow>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[1.3, -1, -0.6]} receiveShadow castShadow>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[-1.3, -1, 0.6]} receiveShadow castShadow>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[1.3, -1, 0.6]} receiveShadow castShadow>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      
      {/* Tapis de souris */}
      {accessories.mousePad && (
        <mesh position={[-0.8, -0.34, 0]} receiveShadow>
          <boxGeometry args={[0.8, 0.02, 0.6]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      )}
      
      {/* Ports USB */}
      {accessories.usbPorts > 0 && (
        <group position={[1.4, -0.35, 0]}>
          {[...Array(accessories.usbPorts)].map((_, i) => (
            <mesh key={i} position={[0, 0, (i - accessories.usbPorts/2 + 0.5) * 0.1]} castShadow>
              <boxGeometry args={[0.05, 0.02, 0.05]} />
              <meshStandardMaterial color="#111" />
            </mesh>
          ))}
        </group>
      )}
      
      {/* Chargeur sans fil */}
      {accessories.wirelessCharger && (
        <mesh position={[0.7, -0.35, 0]} receiveShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
          <meshStandardMaterial color="#555" />
        </mesh>
      )}
      
      {/* Table amovible */}
      {movableTable.included && (
        <mesh 
          position={[
            0, 
            movableTable.position === 'top' ? 0.1 : -0.35, 
            movableTable.position === 'top' ? -0.4 : 0.4
          ]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[1, 0.04, 0.6]} />
          <meshStandardMaterial 
            color={movableTable.material === 'glass' ? '#aacce0' : 
                  movableTable.material === 'metal' ? '#777' : '#a0522d'} 
            transparent={movableTable.material === 'glass'}
            opacity={movableTable.material === 'glass' ? 0.6 : 1}
          />
        </mesh>
      )}
      
      {/* Coffre-fort DeepWork */}
      {deepWorkSafe.included && (
        <group position={[1, -0.2, -0.5]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.5, 0.3, 0.4]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          {/* Affichage du verrou */}
          <mesh position={[0, 0, 0.201]} castShadow>
            <planeGeometry args={[0.2, 0.1]} />
            <meshStandardMaterial color="#222" />
          </mesh>
          {/* Affichage du minuteur */}
          <mesh position={[0, 0.08, 0.201]} castShadow>
            <planeGeometry args={[0.3, 0.06]} />
            <meshStandardMaterial color="#001a33" />
          </mesh>
        </group>
      )}
    </group>
  );
}

function DeskVisualizer({ configuration }) {
  return (
    <div className="desk-visualizer">
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <DeskModel configuration={configuration} />
          </Stage>
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}

export default DeskVisualizer;
