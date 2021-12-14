import CheckArray from "@/helper/CheckArray";
import { useEffect } from "react";
export default function useFieldOfView(model, fieldOfView) {
    useEffect(() => {
        if (!model?.current) return;
        CheckArray(fieldOfView, 1)
            ? model.current.setAttribute("field-of-view", `${fieldOfView[0]}deg`)
            : model.current.removeAttribute("field-of-view")
    }, [model, fieldOfView])

}