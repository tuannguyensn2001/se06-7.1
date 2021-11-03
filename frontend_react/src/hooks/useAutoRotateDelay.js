import { useEffect } from "react"
import CheckArray from "../helper/CheckArray";

export default function useOrbitSensitivity(model, autoRoatateDelay, autoRotate){
    useEffect(()=>{
        
        if(!model?.current) return;
        (CheckArray(autoRoatateDelay,1) &&  autoRotate)
            ? model.current.setAttribute("auto-rotate-delay",`${autoRoatateDelay[0]}`)
            : model.current.removeAttribute("auto-rotate-delay")

        // console.log("model", model.current);
        // console.log("orbitSensitivity", orbitSensitivity);
        // console.log("autoRotate", autoRotate);
    },[model,autoRoatateDelay, autoRotate])
}