import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useRoughness(model,roughness) {
    
    useEffect(() => {
        if (!Array.isArray(model?.current?.model?.materials) || !roughness) return;     
        if (!model.current) return;
        
        if (CheckArray(roughness,1)) {
            let material = model?.current?.model?.materials[0];  
            material.pbrMetallicRoughness.setRoughnessFactor(roughness[0]);
        }
    },[model,roughness])
}