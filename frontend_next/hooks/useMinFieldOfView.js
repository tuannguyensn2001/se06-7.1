import CheckArray from "@/helper/CheckArray";
import {useEffect} from "react";

export default function useMinFieldOfView(model, minFieldOfView, disableZoom) {
    useEffect(() => {
        if (!model?.current) return;
        !disableZoom && !!minFieldOfView
            ? model.current.setAttribute("min-field-of-view", `${minFieldOfView}deg`)
            : model.current.removeAttribute("min-field-of-view")

    }, [model, minFieldOfView, disableZoom])
}