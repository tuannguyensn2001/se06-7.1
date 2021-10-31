import { useRef } from "react";
import useCameraControls from "@/hooks/useCameraControls";
import useBaseColor from "@/hooks/useBaseColor";
import useDisableZoom from "@/hooks/useDisableZoom";
import useAutoRotate from "@/hooks/useAutoRotate";
import useCameraOrbit from "./useCameraOrbit";
import useInterpolationDecay from "./useInterpolationDecay";
import useCameraTarget from "./useCameraTarget";
import useTurnSkybox from "./useTurnSkybox";
import usePan from "./usePan";

export default function useModelViewer({
  children,
  src,
  cameraControls,
  disableZoom,
  baseColor,
  transform,
  cameraOrbit,
  autoRotate,
  interpolationDecay,
  cameraTarget,
  pan,
  srcSkybox,
}) {

  const model = useRef(null);

  useCameraControls(model, cameraControls);

  useBaseColor(model, baseColor);

  useDisableZoom(model, disableZoom);

  useAutoRotate(model, autoRotate);

  useCameraOrbit(model, cameraOrbit);

  useCameraTarget(model, cameraTarget);

  useInterpolationDecay(model, interpolationDecay);

  usePan(model, pan);

  useTurnSkybox(model, srcSkybox);

  return {
    model,
  };
}
