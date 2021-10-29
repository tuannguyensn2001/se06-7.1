import { useEffect } from "react";

export default function useOrientation(model,orientation) {


    useEffect(() => {
        model.current.orientation = (`${orientation[0]}deg ${orientation[1]}deg ${orientation[2]}deg`)
    },[orientation]);
    
}