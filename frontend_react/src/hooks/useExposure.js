import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useExposure(model,exposure) {
    useEffect(() => {

        
        let  arrExposure = [exposure[0]]
        if (!model.current) return;
        console.log(exposure[1])
        if (!exposure[1]) {
            if (CheckArray(arrExposure,1)) {
                model.current.setAttribute("exposure",arrExposure);
                return;
            } 
        }
        model.current.setAttribute("exposure",1);
        model.current.removeAttribute("exposure")

        // console.log(exposure)
  
    },[model,exposure])
    
}