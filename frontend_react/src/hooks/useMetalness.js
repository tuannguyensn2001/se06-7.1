import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useMetalness(model,metalness) {
    
    useEffect(() => {
        if (!Array.isArray(model?.current?.model?.materials) || !metalness) return;     
        if (!model.current) return;
        
        if (CheckArray(metalness,1)) {
            let material = model?.current?.model?.materials[0];  
            material.pbrMetallicRoughness.setMetallicFactor(metalness[0]);
        }
    },[model,metalness])
}