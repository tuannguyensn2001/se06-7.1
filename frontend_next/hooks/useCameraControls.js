import { useEffect } from "react";

export default function useCameraControls(model, cameraControls) {
  useEffect(() => {
    if (!model.current) return;

    cameraControls
      ? model.current.setAttribute("camera-controls", "true")
      : model.current.removeAttribute("camera-controls");
  }, [cameraControls, model]);
}
