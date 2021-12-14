import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useRotationPerSecond(model, rotationPerSecond, autoRotate) {
    useEffect(() => {
        if (!model?.current) return;
        (CheckArray(rotationPerSecond, 1) && autoRotate)
            ? model.current.setAttribute("rotation-per-second", `${rotationPerSecond[0]}rad`)
            : model.current.removeAttribute("rotation-per-second")

    }, [model, rotationPerSecond, autoRotate])
}