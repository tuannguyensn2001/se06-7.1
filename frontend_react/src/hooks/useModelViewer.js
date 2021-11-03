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
import useExposure from "./useExposure";
import useShadowIntensity from "./useShadowIntensity"
import useEnvironmentImage from "./useEnvironmentImage";
import useMetalness from "./useMetalness";
import useRoughness from "./useRoughness";
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
  poster,
  exposure,
  shadowIntensity,
  envImage,
  metalness,
  roughness
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

  // Kiểm soát độ sáng cho cả model và cả khung
  useExposure(model,exposure);

  // Chỉnh độ opacity của bóng model
  useShadowIntensity(model,shadowIntensity)

  useEnvironmentImage(model,envImage);

  useMetalness(model,metalness);

  useRoughness(model,roughness);

  return {
    model,
  };
}
