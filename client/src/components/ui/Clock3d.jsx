import React from "react";
import { useGLTF } from "@react-three/drei";
// import {clock} from '../../../public/Clock3D/clok3d.gltf'

export function Clock3d(props) {
  const { nodes, materials } = useGLTF("/Clock3D/clok3d.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[0, 0.014, -0.007]}>
            <mesh
              geometry={nodes.belt_1_BLACK_PLASTIC_BUMP_0.geometry}
              material={materials.BLACK_PLASTIC_BUMP}
            />
            <mesh
              geometry={nodes.belt_1_BLACK_EMAL_SMOOSH_0.geometry}
              material={materials.BLACK_EMAL_SMOOSH}
            />
          </group>
          <group
            position={[0, 0.014, 0.007]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-1, 1, 1]}
          >
            <mesh
              geometry={nodes.belt_2_BLACK_PLASTIC_BUMP_0.geometry}
              material={materials.BLACK_PLASTIC_BUMP}
            />
            <mesh
              geometry={nodes.belt_2_BLACK_EMAL_SMOOSH_0.geometry}
              material={materials.BLACK_EMAL_SMOOSH}
            />
          </group>
          <group
            position={[1.857, -0.401, 0]}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.484}
          >
            <mesh
              geometry={nodes.Button_side_large_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes.Button_side_large_PLASTIC_RED_1001_0.geometry}
              material={materials["PLASTIC_RED_1.001"]}
            />
          </group>
          <group
            position={[1.77, -0.346, 1.126]}
            rotation={[-0.108, 0.964, 0.544]}
            scale={[0.183, 0.183, 0.143]}
          >
            <mesh
              geometry={nodes.buttons_side_big_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes.buttons_side_big_STEEL_METALL_0_1.geometry}
              material={materials.STEEL_METALL}
            />
          </group>
          <group
            position={[-2.063, -0.203, 0]}
            rotation={[-Math.PI, -1.571, 0]}
            scale={0.272}
          >
            <mesh
              geometry={nodes.knob_side_red_PLASTIC_RED_1001_0.geometry}
              material={materials["PLASTIC_RED_1.001"]}
            />
            <mesh
              geometry={nodes.knob_side_red_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
          </group>
          <group position={[0.954, -0.401, 0]}>
            <mesh
              geometry={nodes.Cylinder002_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes.Cylinder002_PLASTIC_RED_1001_0.geometry}
              material={materials["PLASTIC_RED_1.001"]}
            />
          </group>
          <group position={[-0.478, -0.473, 0.305]} scale={0.451}>
            <mesh
              geometry={nodes.w4_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes.w4_PLASTIC_RED_1001_0.geometry}
              material={materials["PLASTIC_RED_1.001"]}
            />
          </group>
          <group
            position={[0, -0.526, 0]}
            rotation={[-Math.PI, -1.209, -Math.PI]}
            scale={0.461}
          >
            <mesh
              geometry={nodes.watch_wiz_big_BLACK_EMAL_SMOOSH_SS001_0.geometry}
              material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            />
            <mesh
              geometry={nodes.watch_wiz_big_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes.watch_wiz_big_JewelryGlossyGold001_0.geometry}
              material={materials["JewelryGlossyGold.001"]}
            />
          </group>
          <group position={[0, -0.609, 0]} scale={0.461}>
            <mesh
              geometry={
                nodes.watch_wiz_micro_BLACK_EMAL_SMOOSH_SS001_0.geometry
              }
              material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            />
            <mesh
              geometry={nodes.watch_wiz_micro_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
          </group>
          <group
            position={[-0.008, -0.564, 0.006]}
            rotation={[0, -0.029, 0]}
            scale={0.461}
          >
            <mesh
              geometry={
                nodes.watch_wiz_small_BLACK_EMAL_SMOOSH_SS001_0.geometry
              }
              material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            />
            <mesh
              geometry={nodes.watch_wiz_small_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes.watch_wiz_small_JewelryGlossyGold001_0.geometry}
              material={materials["JewelryGlossyGold.001"]}
            />
          </group>
          <group position={[0, -0.447, 0]} scale={[1, 0.78, 1]}>
            <mesh
              geometry={nodes.HORISONTAL_BLOCK001_BLACK_PLASTIC_BUMP_0.geometry}
              material={materials.BLACK_PLASTIC_BUMP}
            />
            <mesh
              geometry={
                nodes.HORISONTAL_BLOCK001_BLACK_EMAL_SMOOSH_SS001_0.geometry
              }
              material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            />
          </group>
          <group position={[0, -0.645, 0]}>
            <mesh
              geometry={nodes.K1_BLACK_EMAL_BUMP001_0.geometry}
              material={materials["BLACK_EMAL._BUMP.001"]}
            />
            <mesh
              geometry={nodes.K1_BLACK_EMAL_SMOOSH_0.geometry}
              material={materials.BLACK_EMAL_SMOOSH}
            />
          </group>
          <group position={[-0.473, -0.632, 0.697]}>
            <mesh
              geometry={nodes.PYRAMID_1001_STEEL_METALL_0.geometry}
              material={materials.STEEL_METALL}
            />
            <mesh
              geometry={nodes["PYRAMID_1001_glowing-plastick001_0"].geometry}
              material={materials["glowing-plastick.001"]}
            />
          </group>
          <mesh
            geometry={
              nodes.Watch_base_frame_BLACK_PLASTIC_ELECTRONICS_WITH_TEXT_0
                .geometry
            }
            material={materials.BLACK_PLASTIC_ELECTRONICS_WITH_TEXT}
          />
          <mesh
            geometry={nodes.Watch_base_frame_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
          />
          <mesh
            geometry={nodes.Base_C_ins_BLACK_PLASTIC_BUMP_0.geometry}
            material={materials.BLACK_PLASTIC_BUMP}
            position={[0, 0.531, -1.925]}
          />
          <mesh
            geometry={nodes.M1_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[-0.507, 4.559, -1.38]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes.M2_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[0.476, 4.221, -2.434]}
          />
          <mesh
            geometry={nodes.M3_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[0.562, 4.451, -0.901]}
          />
          <mesh
            geometry={nodes.S11004_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[1.375, 0.186, -1.973]}
            rotation={[2.964, 1.444, -1.27]}
            scale={0.238}
          />
          <mesh
            geometry={nodes["MUDMUSTER_BELT_2_glowing-plastick001_0"].geometry}
            material={materials["glowing-plastick.001"]}
            rotation={[2.632, 0.197, 0]}
            scale={12.766}
          />
          <mesh
            geometry={nodes["MUDMUSTER_BELT_1_glowing-plastick001_0"].geometry}
            material={materials["glowing-plastick.001"]}
            position={[0.662, 0.247, -2.566]}
            rotation={[2.632, 0.197, 0]}
            scale={12.766}
          />
          <mesh
            geometry={nodes.S11003_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[-1.098, -0.477, -1.688]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.299}
          />
          <mesh
            geometry={nodes.Plane017_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[-0.005, -0.486, -2.135]}
            rotation={[-0.436, 0, 0]}
            scale={[0.261, 0.261, 0.292]}
          />
          <mesh
            geometry={nodes.back_plate_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[0, 0.059, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.A1_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[-0.143, -0.719, 1.218]}
          />
          <mesh
            geometry={nodes.Frame2_BLACK_EMAL_SMOOSH_SS001_0.geometry}
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[0, -0.005, 0]}
          />
          <mesh
            geometry={nodes.Main_glass001_GLASS001_0.geometry}
            material={materials["GLASS.001"]}
            position={[0, -0.778, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.321}
          />
          <mesh
            geometry={nodes.marks_2_BLACK_EMAL_SMOOSH_SS001_0.geometry}
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[-0.467, -0.481, 0.294]}
            scale={0.451}
          />
          <mesh
            geometry={nodes["marks_3_glowing-plastick001_0"].geometry}
            material={materials["glowing-plastick.001"]}
            position={[-0.408, -0.475, 0.021]}
            rotation={[0, -0.211, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes["marks_3001_glowing-plastick001_0"].geometry}
            material={materials["glowing-plastick.001"]}
            position={[-0.713, -0.481, 0.361]}
            rotation={[0, -0.042, 0]}
            scale={0.365}
          />
          <mesh
            geometry={nodes.N6_JewelryGlossyGold001_0.geometry}
            material={materials["JewelryGlossyGold.001"]}
            position={[0.016, -0.517, -0.976]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[9.542, 10.263, 10.674]}
          />
          <mesh
            geometry={nodes.N9_3_JewelryGlossyGold001_0.geometry}
            material={materials["JewelryGlossyGold.001"]}
            position={[-0.013, -0.552, -0.008]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[9.542, 10.263, 10.674]}
          />
          <mesh
            geometry={nodes.N12_JewelryGlossyGold001_0.geometry}
            material={materials["JewelryGlossyGold.001"]}
            position={[0.008, -0.516, 0.96]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[9.542, 10.263, 10.674]}
          />
          <mesh
            geometry={nodes.N_pillow_BLACK_EMAL_SMOOSH_SS001_0.geometry}
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[0, -0.483, 0.893]}
          />
          <mesh
            geometry={nodes.N_small_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[0, -0.722, 0]}
            rotation={[Math.PI / 2, 0, -0.346]}
            scale={11.272}
          />
          <mesh
            geometry={
              nodes.numbers_base_frame001_BLACK_EMAL_SMOOSH_SS001_0.geometry
            }
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[0, -0.633, 0]}
          />
          <mesh
            geometry={nodes.numbers_marks001_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[0, -0.552, 0]}
          />
          <mesh
            geometry={
              nodes.WINDOW_GLASS_back_BLACK_EMAL_SMOOSH_SS001_0.geometry
            }
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[0, -0.433, -0.645]}
          />
          <mesh
            geometry={nodes.WINDOW_GLASS_top001_GLASS001_0.geometry}
            material={materials["GLASS.001"]}
            position={[0.002, -0.453, -0.645]}
          />
          <mesh
            geometry={nodes.BARO001_JewelryGlossyGold001_0.geometry}
            material={materials["JewelryGlossyGold.001"]}
            position={[-0.696, -0.484, 0.621]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.804}
          />
          <mesh
            geometry={nodes.BLENDERLOGO001_STEEL_METALL_0.geometry}
            material={materials.STEEL_METALL}
            position={[0.047, -0.471, 0.473]}
          />
          <mesh
            geometry={nodes.CIRCLE_BASE_WINDOW001_BLACK_EMAL_SMOOSH_0.geometry}
            material={materials.BLACK_EMAL_SMOOSH}
            position={[0, -0.378, 0]}
            scale={[1, 0.49, 1]}
          />
          <mesh
            geometry={nodes.Plane008_BLACK_EMAL_SMOOSH_SS001_0.geometry}
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[-0.851, -0.628, 0.415]}
          />
          <mesh
            geometry={nodes.Plane011_BLACK_EMAL_SMOOSH_SS001_0.geometry}
            material={materials["BLACK_EMAL._SMOOSH_SS.001"]}
            position={[-0.715, -0.628, 0.62]}
          />
          <mesh
            geometry={
              nodes["REC_ST_TR_AL_TEXT001_glowing-plastick001_0"].geometry
            }
            material={materials["glowing-plastick.001"]}
            position={[-0.395, -0.493, -0.13]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.826}
          />
          <mesh
            geometry={nodes.TEMPO001_JewelryGlossyGold001_0.geometry}
            material={materials["JewelryGlossyGold.001"]}
            position={[-0.838, -0.485, 0.415]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3.568}
          />
          <mesh
            geometry={nodes.A_PLASTIC_RED_1001_0.geometry}
            material={materials["PLASTIC_RED_1.001"]}
            position={[-0.365, -0.678, 1.101]}
            rotation={[2.384, 0.248, 0.214]}
            scale={0.124}
          />
          <mesh
            geometry={nodes.MUDMUSTER_RED_PLASTIC_RED_1001_0.geometry}
            material={materials["PLASTIC_RED_1.001"]}
            position={[-0.01, -0.478, -0.312]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={7.059}
          />
          <mesh
            geometry={nodes.P_PLASTIC_RED_1001_0.geometry}
            material={materials["PLASTIC_RED_1.001"]}
            position={[0.35, -0.68, 1.108]}
            rotation={[2.356, -0.229, -0.21]}
            scale={0.124}
          />
          <mesh
            geometry={nodes["SU_630_TEXT001_glowing-plastick001_0"].geometry}
            material={materials["glowing-plastick.001"]}
            position={[0.015, -0.439, -0.664]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.423}
          />
        </group>
        <mesh
          geometry={nodes.Curve036_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-30.721, -134.646, 79.573]}
          rotation={[-0.283, 0.068, 0.048]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve037_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-56.855, -125.247, 79.404]}
          rotation={[-0.264, 0.123, 0.055]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve038_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-81.576, -110.264, 79.292]}
          rotation={[-0.234, 0.174, 0.058]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve039_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-102.118, -91.494, 79.276]}
          rotation={[-0.194, 0.218, 0.059]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve040_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-118.98, -68.825, 79.379]}
          rotation={[-0.146, 0.252, 0.056]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve041_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-130.748, -42.824, 79.419]}
          rotation={[-0.09, 0.277, 0.049]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve042_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-136.215, -15.745, 79.28]}
          rotation={[-0.031, 0.289, 0.04]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve043_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-137.3, 13.675, 79.539]}
          rotation={[0.031, 0.289, 0.031]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve044_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-131.777, 41.201, 79.566]}
          rotation={[0.09, 0.277, 0.022]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve045_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-120.409, 67.726, 79.59]}
          rotation={[0.146, 0.252, 0.016]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve046_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-104.387, 90.597, 79.611]}
          rotation={[0.194, 0.218, 0.012]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve047_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-82.929, 110.03, 79.48]}
          rotation={[0.234, 0.174, 0.013]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve049_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-59.468, 124.835, 79.628]}
          rotation={[0.264, 0.123, 0.016]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve051_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-31.288, 134.797, 79.657]}
          rotation={[0.283, 0.068, 0.023]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve052_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-3.248, 138.374, 79.667]}
          rotation={[0.29, 0.01, 0.031]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve053_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[25.778, 135.948, 79.651]}
          rotation={[0.287, -0.049, 0.04]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve054_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[53.412, 127.665, 79.653]}
          rotation={[0.271, -0.105, 0.047]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve055_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[78.994, 113.245, 79.551]}
          rotation={[0.245, -0.158, 0.052]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve056_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[100.427, 94.558, 79.508]}
          rotation={[0.208, -0.204, 0.055]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve057_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[118.8, 71.719, 79.756]}
          rotation={[0.146, -0.252, 0.053]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve058_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[130.92, 44.749, 79.642]}
          rotation={[0.09, -0.277, 0.047]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve059_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[137.447, 15.846, 79.65]}
          rotation={[0.031, -0.289, 0.04]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve060_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[138.54, -13.377, 79.899]}
          rotation={[-0.031, -0.289, 0.031]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve061_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[132.261, -43.61, 79.922]}
          rotation={[-0.09, -0.277, 0.024]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve062_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[120.134, -69.561, 79.788]}
          rotation={[-0.146, -0.252, 0.019]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve063_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[102.77, -93.069, 79.733]}
          rotation={[-0.194, -0.218, 0.016]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve087_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[80.717, -112.521, 79.674]}
          rotation={[-0.234, -0.174, 0.017]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve088_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[55.866, -126.45, 79.602]}
          rotation={[-0.264, -0.123, 0.022]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve089_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[28.319, -135.145, 79.548]}
          rotation={[-0.283, -0.06, 0.031]}
          scale={1175.486}
        />
        <mesh
          geometry={nodes.Curve090_JewelryGlossyGold001_0.geometry}
          material={materials["JewelryGlossyGold.001"]}
          position={[-1.447, -137.771, 79.468]}
          rotation={[-0.29, 0.01, 0.04]}
          scale={1175.486}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Clock3D/clok3d.gltf");
