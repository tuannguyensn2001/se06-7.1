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
import useAutoRotateDelay from "@/hooks/useAutoRotateDelay";
import useRotationPerSecond from "./useRotationPerSecond";
import useInteractionPolicy from "./useInteractionPolicy";
import useFieldOfView from "./useFieldOfView";
import useMaxCameraOrbit from "./useMaxCameraOrbit";
import useMinCameraOrbit from "./useMinCameraOrbit";
import useMaxFieldOfView from "./useMaxFieldOfView";
import useMinFieldOfView from "./useMinFieldOfView";

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
  autoRotateDelay,
  rotationPerSecond,
  interactionPolicy,
  fieldOfView,
  maxCameraOrbit,
  minCameraOrbit,
  maxFieldOfView,
  minFieldOfView,
}) {

  const model = useRef(null);

  useCameraControls(model, cameraControls);

  useBaseColor(model, baseColor);

  useDisableZoom(model, disableZoom);

  useOrientation(model, orientation);

  useScale(model, scale);

  useAutoRotate(model, autoRotate);

  useCameraOrbit(model, cameraOrbit);

  useCameraTarget(model, cameraTarget);

  useInterpolationDecay(model, interpolationDecay);

  usePan(model, pan);

  useTurnSkybox(model, srcSkybox);

  useAutoRotateDelay(model, autoRotateDelay, autoRotate);

  useRotationPerSecond(model, rotationPerSecond, autoRotate);

  useInteractionPolicy(model, interactionPolicy);

  useFieldOfView(model, fieldOfView);

  useMaxCameraOrbit(model, maxCameraOrbit);

  useMinCameraOrbit(model, minCameraOrbit);

  useMaxFieldOfView(model, maxFieldOfView, disableZoom);

  useMinFieldOfView(model, minFieldOfView, disableZoom);

  return {
    model,
  };
}
