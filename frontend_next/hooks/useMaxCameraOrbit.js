import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useMaxCameraOrbit(model, maxCameraOrbit) {
    useEffect(() => {
        if (!model?.current) return;
        CheckArray(maxCameraOrbit)
            ? model.current.setAttribute("max-camera-orbit", `${maxCameraOrbit[0]}deg ${maxCameraOrbit[1]}deg ${maxCameraOrbit[2]}rad`)
            : model.current.removeAttribute("max-camera-orbit")
    }, [model, maxCameraOrbit])
}