import { useEffect, useRef } from "react";
import useCameraControls from "@/hooks/useCameraControls";
import useBaseColor from "@/hooks/useBaseColor";
import useDisableZoom from "@/hooks/useDisableZoom";
import useOrientation from "./useOrientation";
import useScale from "./useScale";
import useAutoRotate from "@/hooks/useAutoRotate";
import useCameraOrbit from "./useCameraOrbit";
import useInterpolationDecay from "./useInterpolationDecay";
import useCameraTarget from "./useCameraTarget";
import useTurnSkybox from "./useTurnSkybox";
import usePan from "./usePan";
import useOrbitSensitivity from "@/useOrbitSensitivity";

export default function useModelViewer({
  children,
  src,
  cameraControls,
  disableZoom,
  baseColor,
  orientation,
  scale,
  cameraOrbit,
  autoRotate,
  interpolationDecay,
  cameraTarget,
  pan,
  srcSkybox,
  orbitSensitivity
}) {

  const model = useRef(null);

  useCameraControls(model, cameraControls);

  useBaseColor(model, baseColor);

  useDisableZoom(model, disableZoom);

  useOrientation(model,orientation);

  useScale(model,scale);

  useAutoRotate(model, autoRotate);

  useCameraOrbit(model, cameraOrbit);

  useCameraTarget(model, cameraTarget);

  useInterpolationDecay(model, interpolationDecay);

  usePan(model, pan);

  useTurnSkybox(model, srcSkybox);

  useOrbitSensitivity(model, orbitSensitivity, autoRotate);

  return {
    model,
  };
}
