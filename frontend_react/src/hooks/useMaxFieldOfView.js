import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useMaxFieldOfView(model, maxFieldOfView, disableZoom) {
    useEffect(() => {
        if (!model?.current) return;
        CheckArray(maxFieldOfView, 1) && !disableZoom
            ? model.current.setAttribute("max-field-of-view", `${maxFieldOfView[0]}deg`)
            : model.current.removeAttribute("max-field-of-view")
    }, [model, maxFieldOfView, disableZoom])
}