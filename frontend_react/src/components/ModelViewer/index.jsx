import { useEffect, useRef } from "react";

function ModelViewer({
  children,
  src,
  cameraControls,
  disableZoom,
  baseColor,
}) {
  const model = useRef(null);

  useEffect(() => {
    if (!model.current) return;

    cameraControls
      ? model.current.setAttribute("camera-controls", "true")
      : model.current.removeAttribute("camera-controls");
  }, [cameraControls]);

  useEffect(() => {
    if (!model.current) return;

    disableZoom
      ? model.current.setAttribute("disable-zoom", true)
      : model.current.removeAttribute("disable-zoom");
  }, [disableZoom]);

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

  return (
    <model-viewer
      style={{ width: "100%", height: "100%" }}
      ref={model}
      src={src}
    >
      {!!children && children}
    </model-viewer>
  );
}

export default ModelViewer;
