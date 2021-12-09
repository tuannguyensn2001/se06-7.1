import ModelViewer from "@/components/ModelViewer";
import styled from "styled-components";
import SettingsCamera from "@/features/Viewer/components/SettingsCamera";
import { useForm } from "react-hook-form";
import useModel from "@/features/Viewer/hooks/useModel";
import { Button } from "antd";

function Viewer() {
  const { watch, control, handleSubmit } = useForm({
    defaultValues: {
      cameraControls: true,
      disableZoom: false,
      autoRotate: false,
      default: 0,
      checkExposure: true,
      checkMetalness: true,
      checkRoughness: true,
    },
  });

  // const { src, handleSave } = useModel();

  return (
    <div>
      <WrapperStyled>
        <div>
          {/*<Button onClick={handleSubmit(handleSave)}>Lưu</Button>*/}
          <ModelViewer
            // src={src}
            baseColor={watch("baseColor")}
            disableZoom={watch("disableZoom")}
            cameraControls={watch("cameraControls")}
            autoRotate={watch("autoRotate")}
            // srcSkybox={"./asset/whipple_creek_regional_park_04_1k.hdr"}
            autoRotateDelay={[watch("autoRotateDelay")]}
            cameraOrbit={[
              watch("cameraOrbit1"),
              watch("cameraOrbit2"),
              watch("cameraOrbit3"),
            ]}
            cameraTarget={[
              watch("cameraTarget1"),
              watch("cameraTarget2"),
              watch("cameraTarget3"),
            ]}
            rotationPerSecond={[watch("rotationPerSecond")]}
            interactionPolicy={watch("interactionPolicy")}
            fieldOfView={[watch("fieldOfView")]}
            maxCameraOrbit={[
              watch("maxCameraOrbit1"),
              watch("maxCameraOrbit2"),
              watch("maxCameraOrbit3"),
            ]}
            minCameraOrbit={[
              watch("minCameraOrbit1"),
              watch("minCameraOrbit2"),
              watch("minCameraOrbit3"),
            ]}
            maxFieldOfView={[watch("maxFieldOfView")]}
            minFieldOfView={[watch("maxFieldOfView")]}
            interpolationDecay={[watch("interpolationDecay")]}
            orientation={[
              watch("orientationX"),
              watch("orientationY"),
              watch("orientationZ"),
            ]}
            scale={[watch("scaleX"), watch("scaleY"), watch("scaleZ")]}
            metalness={[watch("metalness"), watch("checkMetalness")]}
            roughness={[watch("roughness"), watch("checkRoughness")]}
            exposure={[watch("exposure"), watch("checkExposure")]}
            // shadowIntensity={[watch("shadowIntensity")]}
          />
        </div>
        <div>
          <SettingsCamera control={control} watch={watch} />
        </div>
      </WrapperStyled>
    </div>
  );
}

export default Viewer;

const WrapperStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  & > div:nth-child(1) {
    width: 80%;
    height: 100%;
  }

  & > div:nth-child(2) {
    width: 20%;
    height: 100%;
  }
`;
