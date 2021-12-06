import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useMinFieldOfView(model, minFieldOfView, disableZoom) {
    useEffect(() => {
        if (!model?.current) return;
        !disableZoom && CheckArray(minFieldOfView, 1)
            ? model.current.setAttribute("min-field-of-view", `${minFieldOfView[0]}deg`)
            : model.current.removeAttribute("min-field-of-view")

    }, [model, minFieldOfView, disableZoom])
}