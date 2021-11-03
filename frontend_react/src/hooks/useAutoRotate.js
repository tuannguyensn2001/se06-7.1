import { useEffect } from "react";

export default function useAutoRotate(model, autoRotate) {
  useEffect(() => {
    if (!model.current) return;

    autoRotate
      ? model.current.setAttribute("auto-rotate", "true")
      : model.current.removeAttribute("auto-rotate");

    // console.log("autoRotate", autoRotate);
  }, [autoRotate]);
}
