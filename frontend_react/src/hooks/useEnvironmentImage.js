import { useEffect } from "react";

export default function useEnvironmentImage(model, envImage) {
  useEffect(() => {
    if (!model.current) return;

    if (!!envImage) {
      model.current.setAttribute("environment-image", envImage);
      return;
    }
    model.current.removeAttribute("environment-image");
  }, [model, envImage]);
}
