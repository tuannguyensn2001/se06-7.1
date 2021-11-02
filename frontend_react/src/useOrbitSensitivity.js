import { useEffect } from "react"
import CheckArray from "./helper/CheckArray";

export default function useOrbitSensitivity(model, orbitSensitivity, autoRotate){
    useEffect(()=>{
        
        if(!model?.current) return;
        (CheckArray(orbitSensitivity,1) &&  autoRotate)
            ? model.current.setAttribute("orbit-sensitivity",`${orbitSensitivity[0]}`)
            : model.current.removeAttribute("orbit-sensitivity")

        // console.log("model", model.current);
        console.log("orbitSensitivity", orbitSensitivity);
        console.log("autoRotate", autoRotate);
    },[orbitSensitivity, autoRotate])
}