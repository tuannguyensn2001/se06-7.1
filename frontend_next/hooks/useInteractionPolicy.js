import { useEffect } from "react";

export default function useInteractionPolicy(model, interactionPolicy) {
    useEffect(() => {
        if (!model?.current) return;
        interactionPolicy
            ? model.current.setAttribute("interaction-policy", interactionPolicy)
            : model.current.removeAttribute("interaction-policy")
    }, [model, interactionPolicy])
}