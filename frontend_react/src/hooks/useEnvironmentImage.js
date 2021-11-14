import { useEffect } from "react";

export default function useEnvironmentImage(model, envImage) {
  useEffect(() => {
    if (!model.current) return;

    if (!!envImage) {
      model.current.setAttribute("environment-image", envImage);
      console.log(model.current);
      return;
    }
    model.current.removeAttribute("environment-image");
    console.log(model.current);
  }, [model, envImage]);
}
