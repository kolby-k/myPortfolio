import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three';

import deskScene from '../assets/3d/desk.glb';



export default function Desk({isRotating, setIsRotating, ...props}) {
    const deskRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(deskScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    }

    const handlePointerMove = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if(isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      deskRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

    const handleKeyDown = (e) => {
      if(e.key === 'ArrowLeft') {
        if(!isRotating) setIsRotating(true);
        deskRef.current.rotation.y += 0.01 * Math.PI;
      } else if (e.key === 'ArrowRight') {
        if(!isRotating) setIsRotating(true);
        deskRef.current.rotation.y -= 0.01 * Math.PI;
      }
    }

    const handleKeyUp = (e) => {
      if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setIsRotating(false);
    }
  }
    useFrame(() => {
      if(!isRotating) {
        rotationSpeed.current *= dampingFactor;

        if(Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }
        deskRef.current.rotation.y += rotationSpeed.current;
      } else {
        const rotation = deskRef.current.roation.y;

        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    })

    useEffect(() => {
      const canvas = gl.domElement;
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);

      return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={deskRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.476}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
              geometry={nodes.Plane_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              geometry={nodes.Plane_Line_art001_0.geometry}
              material={materials["Line_art.001"]}
            />
          </group>
          <group
            position={[-55.058, 157.356, 88.794]}
            rotation={[-Math.PI / 2, 0, 0.308]}
            scale={100}
          >
            <mesh
              geometry={nodes.Plane001_Material011_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              geometry={nodes.Plane001_Line_art006_0.geometry}
              material={materials["Line_art.006"]}
            />
          </group>
          <group
            position={[-51.353, 156.109, -95.192]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Circle001_Material009_0.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Circle001_Line_art003_0.geometry}
              material={materials["Line_art.003"]}
            />
          </group>
          <group
            position={[-53.014, 155.042, 150.8]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={114.901}
          >
            <mesh
              geometry={nodes.Plane004_Material006_0.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              geometry={nodes.Plane004_Line_art001_0.geometry}
              material={materials["Line_art.001"]}
            />
          </group>
        
          <group
            position={[-31.81, 155.877, -26.636]}
            rotation={[-Math.PI / 2, 0, -0.171]}
            scale={100}
          >
            <mesh
              geometry={nodes.Plane009_Material017_0.geometry}
              material={materials["Material.017"]}
            />
            <mesh
              geometry={nodes.Plane009_Line_art003_0.geometry}
              material={materials["Line_art.003"]}
            />
          </group>
          <group
            position={[30.188, 155.543, 4.446]}
            rotation={[-Math.PI / 2, 0, -0.313]}
            scale={52.756}
          >
            <mesh
              geometry={nodes.Plane010_Material018_0.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              geometry={nodes.Plane010_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          <group
            position={[25.275, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 214.665, 100]}
          >
            <mesh
              geometry={nodes.Plane011_Material029_0.geometry}
              material={materials["Material.029"]}
            />
            <mesh
              geometry={nodes.Plane011_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          <group
            position={[34.812, 155.594, -63.821]}
            rotation={[-Math.PI / 2, 0, -0.131]}
            scale={21.535}
          >
            <mesh
              geometry={nodes.Plane012_Material019_0.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              geometry={nodes.Plane012_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          <group
            position={[-39.724, 157.035, -164.068]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Plane013_Material021_0.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              geometry={nodes.Plane013_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          <group
            position={[-44.622, 187.596, -185.876]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={93.793}
          >
            <mesh
              geometry={nodes.Plane014_Material022_0.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              geometry={nodes.Plane014_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          <group
            position={[-40.811, 156.613, -176.776]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={88.682}
          >
            <mesh
              geometry={nodes.Plane015_Material024_0.geometry}
              material={materials["Material.024"]}
            />
            <mesh
              geometry={nodes.Plane015_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          
          <group
            position={[-52.381, 223.403, -42.107]}
            rotation={[-Math.PI / 2, 0, -0.323]}
            scale={98.685}
          >
            <mesh
              geometry={nodes.Plane017_Material020_0.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              geometry={nodes.Plane017_Line_art002_0.geometry}
              material={materials["Line_art.002"]}
            />
          </group>
          <group
            position={[129.986, 81.77, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={98.281}
          >
            <mesh
              geometry={nodes.Plane018_Material026_0.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.Plane018_Line_art004_0.geometry}
              material={materials["Line_art.004"]}
            />
          </group>
          <group
            position={[-44.725, 405.955, -0.075]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={110}
          >
            <mesh
              geometry={nodes.BezierCurve001_Material027_0.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              geometry={nodes.BezierCurve001_Line_art001_0.geometry}
              material={materials["Line_art.001"]}
            />
          </group>
          <group
            position={[-51.394, 186.479, -96.726]}
            rotation={[-Math.PI / 2, 0, -0.559]}
            scale={30.822}
          >
            <mesh
              geometry={nodes.Circle002_Material028_0.geometry}
              material={materials["Material.028"]}
            />
            <mesh
              geometry={nodes.Circle002_Line_art_0.geometry}
              material={materials.Line_art}
            />
          </group>
          
          <group
            position={[-46.997, 200.172, 162.926]}
            rotation={[-Math.PI / 2, 0, 0.567]}
            scale={11.499}
          >
            <mesh
              geometry={nodes.Circle003_Material030_0.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              geometry={nodes.Circle003_Line_art001_0.geometry}
              material={materials["Line_art.001"]}
            />
          </group>
          <group
            position={[-18.675, 157.269, 128.673]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={130.55}
          >
            <mesh
              geometry={nodes.Circle004_Material031_0.geometry}
              material={materials["Material.031"]}
            />
            <mesh
              geometry={nodes.Circle004_Line_art003_0.geometry}
              material={materials["Line_art.003"]}
            />
          </group>

          <mesh
            geometry={nodes.Plane023_Material032_0.geometry}
            material={materials["Material.032"]}
            position={[-45.492, 325.765, -14.439]}
            rotation={[-3.04, 0.081, 1.479]}
            scale={17.042}
          />
          <mesh
            geometry={nodes.Plane025_Material033_0.geometry}
            material={materials["Material.033"]}
            position={[-44.109, 303.481, -3.342]}
            rotation={[-0.328, 1.416, 0.319]}
            scale={32.86}
          />
        </group>
      </group>
    </a.group>
  );
}