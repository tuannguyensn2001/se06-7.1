import { useEffect, useRef, useState } from "react";
import ModelViewer from "@/components/ModelViewer";
import styled from "styled-components";
import { Upload, Button } from "antd";
import SettingsCamera from "@/features/Viewer/components/SettingsCamera";
import { useForm } from "react-hook-form";

function App() {
  const [src, setSrc] = useState("");

  const [orbit, setOrbit] = useState("45deg 55deg 2.5m");

  useEffect(() => {
    if (!src) return;
    setTimeout(() => {
      setOrbit("25deg 25deg 1.5m");
    }, 3000);
  }, [src]);

  const { watch, control } = useForm({
    defaultValues: {
      cameraControls: true,
      disableZoom: false,
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
            cameraOrbit={orbit}
            src={src}
            orientation = {[10,20,3]}
            scale = {[1.5,1,1.5]}
          />
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
