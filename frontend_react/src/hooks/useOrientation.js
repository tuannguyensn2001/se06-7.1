import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";

export default function useOrientation(model, orientation) {
  useEffect(() => {
    if (CheckArray(orientation) === false) return;
    console.log("vao dc day roi");

    model.current.orientation = `${orientation[0]}deg ${orientation[1]}deg ${orientation[2]}deg`;
  }, [model, orientation]);
}
