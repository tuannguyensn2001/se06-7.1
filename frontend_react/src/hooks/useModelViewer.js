import { useEffect, useRef } from "react";
import useCameraControls from "@/hooks/useCameraControls";
import useBaseColor from "@/hooks/useBaseColor";
import useDisableZoom from "@/hooks/useDisableZoom";

export default function useModelViewer({
  children,
  src,
  cameraControls,
  disableZoom,
  baseColor,
  transform,
  cameraOrbit,
}) {
  const model = useRef(null);

  useCameraControls(model, cameraControls);

  useBaseColor(model, baseColor);

  useDisableZoom(model, disableZoom);

  return {
    model,
  };
}
