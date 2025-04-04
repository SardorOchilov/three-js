import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';

function Elephant() {
    const {scene} = useGLTF('/assets/elephant.glb'); // GLB modeliga yo'l

    return <group position={[0, -39, 0]} rotation={[0, 0, 0]} >
        <primitive position={[0, 0, 0]} rotation={[0, -1, 0]} object={scene} scale={600}/>
    </group>
    ;
}

const ElephantModel = () => {
    return (
        <Canvas camera={{position: [0, 1, 5], fov: 50}}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[2, 5, 2]}/>
            <OrbitControls/>
            <Elephant/>
        </Canvas>
    );
};

export default ElephantModel;
