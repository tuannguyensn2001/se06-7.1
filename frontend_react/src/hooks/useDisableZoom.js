import { useEffect } from "react";

export default function useDisableZoom(model, disableZoom) {
  useEffect(() => {
    if (!model.current) return;

    disableZoom
      ? model.current.setAttribute("disable-zoom", true)
      : model.current.removeAttribute("disable-zoom");
  }, [disableZoom, model]);
}
