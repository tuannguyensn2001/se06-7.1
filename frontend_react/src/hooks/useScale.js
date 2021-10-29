import { useEffect } from "react"
import CheckArray from "@/helper/CheckArray";

export default function useScale(model,scale) {

    useEffect(() => {

        if (CheckArray(scale,scale.length) === false) return;
        model.current.scale = (`${scale[0]}deg ${scale[1]}deg ${scale[2]}deg`)
    },[scale])
  
}