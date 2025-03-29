import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';

function Elephant() {
    const {scene} = useGLTF('/assets/elephant.glb'); // GLB modeliga yo'l

    return <primitive position={[0, -12, 0]} object={scene} scale={200}/>;
}

const ElephantModel = () => {
    return (
        <Canvas camera={{position: [0, 2, 5], fov: 50}} >
            <ambientLight intensity={0.5}/>
            <directionalLight position={[2, 5, 2]}/>
            <OrbitControls/>
            <Elephant/>
        </Canvas>
    );
};

export default ElephantModel;
