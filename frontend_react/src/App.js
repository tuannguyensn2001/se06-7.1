import { useEffect, useRef, useState } from "react";
import ModelViewer from "@/components/ModelViewer";
import styled from "styled-components";
import { Upload, Button } from "antd";
import SettingsCamera from "@/features/Viewer/components/SettingsCamera";
import { useForm } from "react-hook-form";
import Hotspot from "@/components/Hotspot";

function App() {
  const [src, setSrc] = useState("");

  const [orbit, setOrbit] = useState("45deg 55deg 2.5m");

  const [orientation, setOrientation] = useState([1, 2, 3]);

  useEffect(() => {
    if (!src) return;
    setTimeout(() => {
      setOrbit("25deg 25deg 1.5m");
    }, 3000);
  }, [src]);

  // useEffect(() => {
  //   if (!src) return;

  //   let interval = setInterval(() => {
  //     setOrientation((prevState) => {
  //       const [a, b, c] = orientation;
  //       return [a + 1, b + 1, c + 1];
  //     });
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [orientation, src]);

    const {watch, control} = useForm({
        defaultValues: {
            cameraControls: true,
            disableZoom: false,
            maxFieldOfView: 60,
            autoRotate: false,
        },
    });

  const handleChangeFile = (info) => {
    setSrc(URL.createObjectURL(info));
  };

  return (
    <div>
      <Upload beforeUpload={handleChangeFile}>
        <Button>Click to Upload</Button>
      </Upload>
      <WrapperStyled>
        <div>
          <ModelViewer
            baseColor={watch("baseColor")}
            disableZoom={watch("disableZoom")}
            cameraControls={watch("cameraControls")}
            autoRotate={watch("autoRotate")}
            src={src}
            srcSkybox={"./asset/aircraft_workshop_01_1k.hdr"}
            autoRotateDelay={[watch("autoRotateDelay")]}
            cameraOrbit={[watch("cameraOrbit1"), watch("cameraOrbit2"), watch("cameraOrbit3")]}
            cameraTarget={[watch("cameraTarget1"), watch("cameraTarget2"), watch("cameraTarget3")]}
            rotationPerSecond={[watch("rotationPerSecond")]}
            interactionPolicy={watch("interactionPolicy")}
            fieldOfView={[watch("fieldOfView")]}
            maxCameraOrbit={[watch("maxCameraOrbit1"), watch("maxCameraOrbit2"), watch("maxCameraOrbit3")]}
            minCameraOrbit={[watch("minCameraOrbit1"), watch("minCameraOrbit2"), watch("minCameraOrbit3")]}
            maxFieldOfView={[watch("maxFieldOfView")]}
            minFieldOfView={[watch("maxFieldOfView")]}
            interpolationDecay={[watch("interpolationDecay")]}

          >
            {!!src && (
              <button
                slot="hotspot-hand"
                data-position="-0.54 0.93 0.1"
                data-normal="-0.73 0.05 0.69"
              >
                <div id="annotation">This hotspot disappears completely</div>
              </button>
            )}
          </ModelViewer>
        </div>
        <div>
          <SettingsCamera control={control} />
        </div>
      </WrapperStyled>
    </div>
  );
}

export default App;

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
