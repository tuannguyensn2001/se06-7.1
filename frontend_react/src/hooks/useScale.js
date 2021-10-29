import { useEffect } from "react"

export default function useScale(model,scale) {

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

        if (checkArray(scale) === false) return;
        model.current.scale = (`${scale[0]}deg ${scale[1]}deg ${scale[2]}deg`)
    },[scale])
  
}