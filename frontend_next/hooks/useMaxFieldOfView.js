import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useMaxFieldOfView(model, maxFieldOfView, disableZoom) {
    useEffect(() => {
        if (!model?.current) return;
        !maxFieldOfView && !disableZoom
            ? model.current.setAttribute("max-field-of-view", `${maxFieldOfView}deg`)
            : model.current.removeAttribute("max-field-of-view")
    }, [model, maxFieldOfView, disableZoom])
}