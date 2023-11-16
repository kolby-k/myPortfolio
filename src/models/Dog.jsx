import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from '../assets/3d/dog.glb'

export default function Dog({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());

        if(actions[currentAnimation]) {
            actions[currentAnimation].play();
        }
        
    }, [actions, currentAnimation])


  return (
    <group ref={group} {...props}>
      <group>
        <group name="Geometry">
          <skinnedMesh
            name="Rover"
            geometry={nodes.Rover.geometry}
            material={nodes.Rover.material}
            skeleton={nodes.Rover.skeleton}
          />
          <group name="Rover_Props">
            <skinnedMesh
              name="Rover_travel_bag"
              geometry={nodes.Rover_travel_bag.geometry}
              material={nodes.Rover_travel_bag.material}
              skeleton={nodes.Rover_travel_bag.skeleton}
            />
          </group>
        </group>
        <primitive object={nodes.Root} />
      </group>
    </group>
  );
}