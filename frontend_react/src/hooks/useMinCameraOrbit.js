import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useMinCameraOrbit(model, minCameraOrbit) {
    useEffect(() => {
        if (!model?.current) return;
        CheckArray(minCameraOrbit)
            ? model.current.setAttribute("min-camera-orbit", `${minCameraOrbit[0]}deg ${minCameraOrbit[1]}deg ${minCameraOrbit[2]}rad`)
            : model.current.removeAttribute("min-camera-orbit")
    }, [model, minCameraOrbit])
}