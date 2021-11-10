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

  const [poster , setPoster] = useState("");
  useEffect(() => {
    if (!src) return;
    setTimeout(() => {
      setOrbit("25deg 25deg 1.5m");
    }, 3000);
  }, [src]);

  useEffect(() => {
    if (!src) return;

    let interval = setInterval(() => {
      setOrientation((prevState) => {
        const [a, b, c] = orientation;
        return [a + 1, b + 1, c + 1];
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [orientation, src]);

  const { watch, control } = useForm({
    defaultValues: {
      cameraControls: true,
      disableZoom: false,
    },
  });

  const handleChangeFile = (info) => {
    setPoster("./asset/smash-3.jpg")
    setTimeout(() =>{

      setSrc(URL.createObjectURL(info));
    },1000)
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
            // Thêm alt
            alt = ""
            autoRotate={true}
            src={src}
            shadowIntensity = {[3]}
            srcSkybox = {"./asset/neutral.hdr"}
            envImage = {"./asset/smash-3.jpg"}
            poster = {poster}
            roughness = {[0.5]}
            metalness = {[0.3]}
            scale = {[2,1,1.5]}
            maxFieldOfView={[180]}
            minFieldOfView={[10]}
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
