import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useRoughness(model,roughness) {
    
    useEffect(() => {

        let arrRoughness = [roughness[0]]
        if (!Array.isArray(model?.current?.model?.materials) || !roughness) return;     
        if (!model.current) return;
        let material = model?.current?.model?.materials[0];  
        
        if (!roughness[1]){
            if (CheckArray(roughness,1)) {
                material.pbrMetallicRoughness.setRoughnessFactor(arrRoughness);
                return
            }
        }
        material.pbrMetallicRoughness.setRoughnessFactor(1);
    },[model,roughness])
}