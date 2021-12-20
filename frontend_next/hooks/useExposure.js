import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";
export default function useExposure(model, exposure) {
  useEffect(() => {
    if (!Array.isArray(exposure)) return;

    let arrExposure = [exposure[0]];
    if (!model.current) return;
    if (!exposure[1]) {
      if (CheckArray(arrExposure, 1)) {
        model.current.setAttribute("exposure", arrExposure);
        return;
      }
    }
    model.current.setAttribute("exposure", 1);
    model.current.removeAttribute("exposure");
  }, [model, exposure]);
}
