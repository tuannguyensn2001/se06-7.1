import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useInterpolationDecay(model, interpolationDecay) {
    useEffect(()=>{
        if (!model.current) return;

        if (CheckArray(interpolationDecay,1)) {
            model.current.setAttribute('interpolation-decay',`${interpolationDecay[0]}`);

            const orbitCycle = [
                '45deg 55deg 4m',
                '-60deg 110deg 2m',
                model?.current
                    ? model.current.cameraOrbit
                    : '10deg 15deg 10m'
            ];
            const intervalID = setInterval(() => {
                if (!model?.current) return;
                const currentOrbitIndex = orbitCycle.indexOf(model.current.cameraOrbit);
                model.current.cameraOrbit =
                    orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
            }, 3000);

            return (()=>{
                clearInterval(intervalID)
            });
                
        }
        else model.current.removeAttribute('interpolation-decay') ;

    }, [interpolationDecay])
    
    
}