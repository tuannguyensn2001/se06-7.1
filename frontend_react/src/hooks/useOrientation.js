import { useEffect } from "react";

export default function useOrientation(model,orientation) {

    
    function checkArray(arr) {
       console.log(arr)
        if (Array.isArray(arr) !== true || arr.length < 3) return false;

        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] !== "number") {
                return false;
            }
        }
        return true;
    }
    useEffect(() => {
    
        if (checkArray(orientation) === false)  return;
        console.log("vao dc day roi")

        model.current.orientation = (`${orientation[0]}deg ${orientation[1]}deg ${orientation[2]}deg`);
    },[orientation]);

}