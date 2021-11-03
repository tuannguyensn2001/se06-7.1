import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useExposure(model,exposure) {
    useEffect(() => {
        if (!model.current) return;

        console.log(exposure)
        if (CheckArray(exposure,1)) {
            model.current.setAttribute("exposure",exposure[0]);
            return;
        }
        model.current.removeAttribute("exposure")

        // if (typeof exposure == "number") {
        //     model.current.setAttribute("exposure", exposure)
        //     return;
        // }
        // model.current.removeAttribute("exposure")
       
        
    },[model,exposure])
    
}