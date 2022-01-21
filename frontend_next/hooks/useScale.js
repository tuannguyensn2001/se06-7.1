import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";

export default function useScale(model, scale) {
  useEffect(() => {
    if (!Array.isArray(scale)) return;
    for (let i = 0; i < scale.length; i++) {
      if (scale[i] === null || scale[i] === undefined) {
        scale[i] = 1;
      }
    }

    model.current.scale = `${scale[0]} ${scale[1]} ${scale[2]}`;
  }, [model, scale]);
}
