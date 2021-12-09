import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useCameraOrbit(model, cameraOrbit) {
    
    useEffect(() => {
        if (!model.current) return;

        CheckArray(cameraOrbit)
            ? model.current.setAttribute('camera-orbit',`${cameraOrbit[0]}deg ${cameraOrbit[1]}deg ${cameraOrbit[2]}m`)
            : model.current.removeAttribute('camera-orbit');
    }, [cameraOrbit])
}