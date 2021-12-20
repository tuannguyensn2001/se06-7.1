import { useEffect } from "react";
import CheckArray from "../helper/CheckArray";

export default function useOrbitSensitivity(
  model,
  autoRoatateDelay,
  autoRotate
) {
  useEffect(() => {
    if (!model?.current) return;
    console.log("change rotate delay", autoRoatateDelay);
    !!autoRotate && Number(autoRoatateDelay)
      ? model.current.setAttribute("auto-rotate-delay", `${autoRoatateDelay}`)
      : model.current.removeAttribute("auto-rotate-delay");
  }, [model, autoRoatateDelay, autoRotate]);
}
