import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three';

import houseScene from '../assets/3d/house.glb';

export default function House({isRotating, setIsRotating, setCurrentStage, ...props}) {
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(houseScene);
  
    const [lastX, setLastX] = useState(0);
    const [rotationSpeed, setRotationSpeed] = useState(0);
    const houseRef = useRef();
  
    const dampingFactor = 0.95;
  
    const handlePointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);
  
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  
      setLastX(clientX);
    };
  
    const handlePointerUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    };
  
    const handlePointerMove = (e) => {
      e.stopPropagation();
      e.preventDefault();
  
      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  
        const delta = (clientX - lastX) / viewport.width;
  
        houseRef.current.rotation.y += delta * 0.01 * Math.PI;
        setLastX(clientX);
        setRotationSpeed(delta * 0.01 * Math.PI);
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        houseRef.current.rotation.y += 0.01 * Math.PI;
      } else if (e.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        houseRef.current.rotation.y -= 0.01 * Math.PI;
      }
    };
  
    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setIsRotating(false);
      }
    };
  
    useFrame(() => {
      if (!isRotating) {
        setRotationSpeed(rotationSpeed * dampingFactor);
  
        if (Math.abs(rotationSpeed) < 0.001) {
          setRotationSpeed(0);
        }
        houseRef.current.rotation.y += rotationSpeed;
      } else {
        const rotation = houseRef.current.rotation.y;
  
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    });
  
    useEffect(() => {
      const canvas = gl.domElement;
      canvas.addEventListener("pointerdown", handlePointerDown);
      canvas.addEventListener("pointerup", handlePointerUp);
      canvas.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
  
      return () => {
        canvas.removeEventListener("pointerdown", handlePointerDown);
        canvas.removeEventListener("pointerup", handlePointerUp);
        canvas.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  
      return (
      <a.group ref={houseRef} {...props}>
                   <group scale={0.001}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.ground_ground_top_0.geometry}
            material={materials.ground_top}
          />
          <mesh
            geometry={nodes.ground_ground_side_0.geometry}
            material={materials.ground_side}
          />
          <mesh
            geometry={nodes.ground_ground_bottom_0.geometry}
            material={materials.ground_bottom}
          />
          <mesh
            geometry={nodes.ground_water_0.geometry}
            material={materials.water}
          />
        </group>
        <group
          position={[-8612.688, -50, -11194.074]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.397}
        >
          <mesh
            geometry={nodes.tree_001_tree_wood_0.geometry}
            material={materials.tree_wood}
          />
          <mesh
            geometry={nodes.tree_001_tree_leaves_2_0.geometry}
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-10202.173, -222.902, -4306.358]}
          rotation={[-1.623, -0.016, -0.1]}
          scale={0.649}
        >
          <mesh
            geometry={nodes.tree_002_tree_wood_0.geometry}
            material={materials.tree_wood}
          />
          <mesh
            geometry={nodes.tree_002_tree_leaves_1_0.geometry}
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[11022.293, -448.342, 23940.105]}
          rotation={[-1.648, -0.023, 1.064]}
          scale={0.603}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_001_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_001_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[20450.463, 3895.491, -11647.09]}
          rotation={[-1.476, -0.102, -2.924]}
          scale={0.76}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_002_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_002_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-2210.352, 507.318, -17225.145]}
          rotation={[-1.302, 0.035, -0.651]}
          scale={0.387}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_003_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_003_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-13162.01, 2790.386, -18865.963]}
          rotation={[-1.38, 0.078, -2.533]}
          scale={0.709}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_004_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_004_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[15458.871, 1737.796, -13199.938]}
          rotation={[-1.388, -0.084, 1.995]}
          scale={1.08}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_005_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_005_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-4577.764, 4706.811, -26215.021]}
          rotation={[-1.382, 0.21, -0.234]}
          scale={0.591}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_006_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_006_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[25344.252, 4377.5, -1437.279]}
          rotation={[-1.539, -0.005, -2.512]}
          scale={0.76}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_008_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_008_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[-9402.273, 6004.402, -26639.406]}
          rotation={[-1.688, 0.131, 0.212]}
          scale={0.984}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_010_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_010_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[18601.986, 794.993, 3027.898]}
          rotation={[-1.574, -0.043, 0.705]}
          scale={1.093}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_012_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_012_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-27123.848, -50, 13911.195]}
          rotation={[-1.595, 0.055, -2.611]}
          scale={0.829}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_013_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_013_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[7691.8, -186.976, 27751.902]}
          rotation={[-1.621, 0.045, -1.339]}
          scale={0.483}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_014_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_014_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[18390.557, -78.128, 21093.137]}
          rotation={[-1.611, -0.07, 2.474]}
          scale={1.047}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_015_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_015_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-21769.807, 928.248, -7702.357]}
          rotation={[-1.438, 0.058, 2.515]}
          scale={0.483}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_016_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_016_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[20755.191, 6897.234, -17687.33]}
          rotation={[-1.5, -0.019, 0.212]}
          scale={1.584}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_017_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_017_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[2445.421, 3304.026, -24337.295]}
          rotation={[-1.426, 0.053, 1.795]}
          scale={1.619}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_018_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_018_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[2198.402, -50, -11160.293]}
          rotation={[-1.62, 0.019, -1.168]}
          scale={0.955}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_020_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_020_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-2875.367, -136.282, -5473.373]}
          rotation={[-1.599, 0.005, -1.027]}
          scale={0.655}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_021_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_021_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[25206.068, 3556.771, 5413.581]}
          rotation={[-1.482, -0.101, 0.774]}
          scale={1.242}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_022_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_022_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[12299.662, -49.814, -2422.566]}
          rotation={[-1.488, -0.025, 0.936]}
          scale={0.503}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_023_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_023_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-29217.145, 563.472, -5030.509]}
          rotation={[-1.527, -0.053, 0.524]}
          scale={0.475}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_025_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_025_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[28075.357, 5315.434, -9691.873]}
          rotation={[-1.571, 0.018, -0.356]}
          scale={1.16}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_026_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_026_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[11820.174, 3732.233, -20804.223]}
          rotation={[-1.293, -0.075, -0.264]}
          scale={1.639}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_027_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_027_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[18127.68, 1262.442, -6763.592]}
          rotation={[-1.497, -0.019, -2.995]}
          scale={0.694}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_029_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_029_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-13857.941, 5799.263, -24377.725]}
          rotation={[-1.456, 0.114, -2.472]}
          scale={0.485}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_031_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_031_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[18388.482, 927.615, -2650.693]}
          rotation={[-1.607, -0.105, -0.997]}
          scale={0.452}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_032_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_032_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-24872.625, -69.437, 4758.966]}
          rotation={[-1.548, 0.017, 2.632]}
          scale={0.796}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_034_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_034_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[-16370.842, 489.731, -8273.118]}
          rotation={[-1.498, 0.061, 1.662]}
          scale={1.006}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_036_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_036_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[14137.523, 83.516, -5468.167]}
          rotation={[-1.503, -0.025, 0.76]}
          scale={0.701}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_037_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_037_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[-23797.596, 4151.792, -15560.577]}
          rotation={[-1.401, 0.107, -2.876]}
          scale={0.449}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_040_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_040_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-21497.666, -319.108, 10034.809]}
          rotation={[-1.617, -0.013, -0.674]}
          scale={0.621}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_041_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_041_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-21826.215, -151.408, -2417.432]}
          rotation={[-1.485, 0.06, -2.912]}
          scale={1.009}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_042_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_042_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[6692.935, 587.242, -16484.813]}
          rotation={[-1.461, 0.07, -2.727]}
          scale={0.492}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_046_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_046_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[22249.619, 3046.149, -4950.187]}
          rotation={[-1.551, -0.034, -2.916]}
          scale={0.52}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_047_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_047_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-24651.383, 2050.999, -10755.357]}
          rotation={[-1.479, -0.077, 0.699]}
          scale={0.279}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_048_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_048_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[21505.535, 48.499, 13216.835]}
          rotation={[-1.586, -0.083, -0.224]}
          scale={0.778}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_049_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_049_tree_leaves_1_0.geometry
            }
            material={materials.tree_leaves_1}
          />
        </group>
        <group
          position={[-19470.387, 5046.937, -20557.07]}
          rotation={[-1.377, 0.072, 2.424]}
          scale={0.983}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_051_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_051_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[12272.039, -310.192, 3988.49]}
          rotation={[-1.573, -0.049, 0.423]}
          scale={0.402}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_052_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_052_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[26815.9, 2414.375, 10749.446]}
          rotation={[-1.318, 0.039, -0.876]}
          scale={0.786}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_059_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_059_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[-5893.661, 2393.918, -21050.387]}
          rotation={[-1.293, 0.092, -3.139]}
          scale={1.129}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_060_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_060_tree_leaves_3_0.geometry
            }
            material={materials.tree_leaves_3}
          />
        </group>
        <group
          position={[-19233.438, 2546.227, -13747.75]}
          rotation={[-1.58, 0.059, -0.54]}
          scale={0.559}
        >
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_062_tree_wood_0.geometry
            }
            material={materials.tree_wood}
          />
          <mesh
            geometry={
              nodes.CoronaScatter_converted_tree_062_tree_leaves_2_0.geometry
            }
            material={materials.tree_leaves_2}
          />
        </group>
        <group
          position={[8393.011, -132.323, -7101.435]}
          rotation={[-Math.PI / 2, 0, -0.611]}
        >
          <group position={[0, 0, 500]}>
            <mesh
              geometry={nodes.house_roof_top_0.geometry}
              material={materials.roof_top}
            />
            <mesh
              geometry={nodes.house_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.house_walls_0.geometry}
              material={materials.walls}
            />
            <mesh
              geometry={nodes.house_roof_sides_0.geometry}
              material={materials.roof_sides}
            />
          </group>
          <group position={[-2300, -999.998, 600]} rotation={[0, 0, Math.PI]}>
            <mesh
              geometry={nodes.Box014_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box014_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[0, -3100, 4324.423]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.37, 1.37, 1]}
          >
            <mesh
              geometry={nodes.Cylinder001_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder001_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[-1250, -3049.999, 600]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              geometry={nodes.Box005_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box005_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group position={[1250, -3050, 600]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              geometry={nodes.Box006_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box006_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group position={[0, -3050, 600]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              geometry={nodes.Box009_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box009_door_0.geometry}
              material={materials.door}
            />
          </group>
          <group
            position={[-1250.001, 3050, 600]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[-1, 1, 1]}
          >
            <mesh
              geometry={nodes.Box010_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box010_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[1249.999, 3050, 600]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[-1, 1, 1]}
          >
            <mesh
              geometry={nodes.Box011_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box011_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group position={[2300, -1000, 600]}>
            <mesh
              geometry={nodes.Box012_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box012_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group position={[2299.999, 1000.002, 600]}>
            <mesh
              geometry={nodes.Box013_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box013_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[-2299.999, 1000.001, 600]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              geometry={nodes.Box015_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Box015_glass_0.geometry}
              material={materials.glass}
            />
          </group>
        </group>
        <group
          position={[6712.887, -112.612, 1915.765]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
        >
          <mesh
            geometry={nodes.marine_wood_planks_0.geometry}
            material={materials.wood_planks}
          />
          <mesh
            geometry={nodes.marine_tree_wood_0.geometry}
            material={materials.tree_wood}
          />
        </group>
        <group
          position={[4098.451, -112.612, 3735.123]}
          rotation={[0, Math.PI / 6, 0]}
          scale={1.203}
        >
          <mesh
            geometry={nodes.char_man_char_man_0.geometry}
            material={materials.char_man}
            position={[-567.775, 112.612, 449.167]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
          />
        </group>
        <mesh
          geometry={nodes.smoke_smoke_0.geometry}
          material={materials.smoke}
          position={[8585.373, 10294.616, -4866.739]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.CoronaScatter_converted_grass_001_grass_0.geometry}
          material={materials.grass}
          position={[11024.172, -448.146, 23942.961]}
          rotation={[-1.651, -0.132, 1.066]}
          scale={1.751}
        />
      </group>
    </a.group>
  );
}

