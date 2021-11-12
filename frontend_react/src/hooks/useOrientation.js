import { useEffect } from "react";
import CheckArray from "@/helper/CheckArray";

export default function useOrientation(model, orientation) {
  useEffect(() => {


    console.log(orientation)
    // eslint-disable-next-line array-callback-return
    for (let i = 0 ; i < orientation.length; i++) {
      if (orientation[i] === null || orientation[i] === undefined) {
        orientation[i] = 0
      }
    }

    // console.log(orientation)
    // if (CheckArray(orientation) === false) return;
    // console.log("vao dc day roi");

    model.current.orientation = `${orientation[0]}deg ${orientation[1]}deg ${orientation[2]}deg`;
  }, [model, orientation]);
}
