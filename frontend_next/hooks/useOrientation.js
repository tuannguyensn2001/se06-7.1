import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";

export default function useOrientation(model, orientation) {
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    if (!Array.isArray(orientation)) return;
    for (let i = 0; i < orientation.length; i++) {
      if (orientation[i] === null || orientation[i] === undefined) {
        orientation[i] = 0;
      }
    }
    model.current.orientation = `${orientation[0]}deg ${orientation[1]}deg ${orientation[2]}deg`;
  }, [model, orientation]);
}
