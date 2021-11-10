import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useShadowIntensity(model,shadowIntensity) {
    useEffect(() => {

        if (!model.current) return;
        if (CheckArray(shadowIntensity,1)) {
            model.current.setAttribute("shadow-intensity" , shadowIntensity);
            return;
        }
        model.current.removeAttribute("shadow-intesity")
    },[model,shadowIntensity])
}