import useModelViewer from "@/hooks/useModelViewer";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import html2canvas from "html2canvas";

function ModelViewer(props, ref) {
  const { model } = useModelViewer(props);

  useImperativeHandle(ref, () => {
    return {
      capture() {
        return model.current.toDataURL();
      },
    };
  });

  return (
    <>
      <model-viewer
        style={{ width: "100%", height: "100%" }}
        ref={model}
        src={props.src}
        alt={props.alt}
        camera-orbit={props.cameraOrbit}
        autoRotate={true}
        poster={props.poster}
        autoplay
      >
        {!!props.children && props.children}
      </model-viewer>
    </>
  );
}

export default forwardRef(ModelViewer);
