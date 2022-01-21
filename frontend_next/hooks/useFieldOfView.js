import CheckArray from "@/helper/CheckArray";
import {useEffect} from "react";

export default function useFieldOfView(model, fieldOfView) {
    useEffect(() => {
        if (!model?.current) return;
        !!fieldOfView
            ? model.current.setAttribute("field-of-view", `${fieldOfView}deg`)
            : model.current.removeAttribute("field-of-view")
    }, [model, fieldOfView])

}