import useModelViewer from '@/hooks/useModelViewer';
import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {Button} from '@chakra-ui/react';

function ModelViewer(props, ref) {
    const {model} = useModelViewer(props);

    useImperativeHandle(ref, () => {
        return {
            capture() {
                return model.current.toDataURL();
            },
            async download() {
                const gltf = await model.current.exportScene();
                const file = new File([gltf], "export.glb");
                const link = document.createElement("a");
                link.download = file.name;
                link.href = URL.createObjectURL(file);
                link.click();
            }
        };
    });

    return (
        <>
            <model-viewer
                style={{width: '100%', height: '100%', backgroundColor: '#a5a4a4'}}
                ar
                ar-modes="webxr"
                ref={model}
                src={props.src}
                alt={props.alt}
                camera-orbit={props.cameraOrbit}
                autoRotate={true}
                poster={props.poster}
                autoplay
            >
                {/*{!!props.children && props.children}*/}
            </model-viewer>
        </>
    );
}

export default forwardRef(ModelViewer);
