import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useCameraTarget(model, cameraTarget) {
    
    useEffect(() => {
        if (!model.current) return;

        CheckArray(cameraTarget) //ktra đk mang
            ? model.current.setAttribute('camera-target',`${cameraTarget[0]}m ${cameraTarget[1]}m ${cameraTarget[2]}m`)
            : model.current.removeAttribute('camera-target');
    }, [cameraTarget])
}