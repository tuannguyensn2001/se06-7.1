import useModelViewer from "@/hooks/useModelViewer";

function ModelViewer(props) {
  const { model } = useModelViewer(props);

  return (
    <model-viewer
      style={{ width: "100%", height: "100%" }}
      ref={model}
      src={props.src}
      alt = {props.alt}
      camera-orbit={props.cameraOrbit}
      autoRotate={true}
      poster = {props.poster}
      max-field-of-view = "175deg"
      autoplay
    >
      {!!props.children && props.children}
    </model-viewer>
  );
}

export default ModelViewer;
