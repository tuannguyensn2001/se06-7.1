import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useMetalness(model,metalness) {
    
    useEffect(() => {

        let arrMetalness = [metalness[0]]

        if (!Array.isArray(model?.current?.model?.materials) || !arrMetalness) return;     
        if (!model.current) return;
        let material = model?.current?.model?.materials[0];  
            
        if (!metalness[1]) {
            if (CheckArray(arrMetalness,1)) {
                material.pbrMetallicRoughness.setMetallicFactor(arrMetalness[0]);
                return;
            }
        }
        material.pbrMetallicRoughness.setMetallicFactor(0);

    },[model,metalness])
}