import { useEffect } from "react"

export default function useScale(model,scale) {
    useEffect(() => {
        scale 
        ? model.current.scale = (`${scale[0]}deg ${scale[1]}deg ${scale[2]}deg`)
        : model.current.scale = (`${0} ${0} ${0}`)
    },[scale])
}