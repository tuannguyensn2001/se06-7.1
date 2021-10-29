import { useEffect } from "react"
import CheckArray from "@/helper/CheckArray";

export default function useScale(model,scale) {

    useEffect(() => {

        if (CheckArray(scale) === false) return;
        model.current.scale = (`${scale[0]} ${scale[1]} ${scale[2]}`)
    },[scale])
  
}