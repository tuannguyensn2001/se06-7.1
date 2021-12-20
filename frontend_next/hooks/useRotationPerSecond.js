import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";

export default function useRotationPerSecond(
  model,
  rotationPerSecond,
  autoRotate
) {
  useEffect(() => {
    if (!model?.current) return;
    Number(rotationPerSecond) && autoRotate
      ? model.current.setAttribute(
          "rotation-per-second",
          `${rotationPerSecond}rad`
        )
      : model.current.removeAttribute("rotation-per-second");
  }, [model, rotationPerSecond, autoRotate]);
}
