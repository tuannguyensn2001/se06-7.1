import { useEffect, useRef } from "react";
import useCameraControls from "@/hooks/useCameraControls";
import useBaseColor from "@/hooks/useBaseColor";
import useDisableZoom from "@/hooks/useDisableZoom";
import useOrientation from "./useOrientation";
import useScale from "./useScale";

export default function useModelViewer({
  children,
  src,
  cameraControls,
  disableZoom,
  baseColor,
  orientation,
  scale,
  cameraOrbit,
}) {

  const model = useRef(null);

  useCameraControls(model, cameraControls);

  useBaseColor(model, baseColor);

  useDisableZoom(model, disableZoom);

  useOrientation(model,orientation);

  useScale(model,scale);

  return {
    model,
  };
}
