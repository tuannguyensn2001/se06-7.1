import { useEffect } from "react"

export default function useScale(model,scale) {

    useEffect(() => {
        model.current.scale = (`${scale[0]}deg ${scale[1]}deg ${scale[2]}deg`)
    },[scale])
  
}