import { useEffect } from "react";

export default function useBaseColor(model, baseColor) {
  useEffect(() => {
    if (!Array.isArray(model?.current?.model?.materials) || !baseColor) return;

    const [material] = model?.current?.model?.materials;

    baseColor = baseColor.rgb;

    console.log([baseColor?.r, baseColor?.g, baseColor?.b, baseColor?.a]);

    material.pbrMetallicRoughness.setBaseColorFactor([
      baseColor?.r,
      baseColor?.g,
      baseColor?.b,
      baseColor?.a,
    ]);
  }, [baseColor]);
}
