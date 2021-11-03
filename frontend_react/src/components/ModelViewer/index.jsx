import useModelViewer from "@/hooks/useModelViewer";

function ModelViewer(props) {
  const { model } = useModelViewer(props);

  return (
    <model-viewer
      style={{ width: "100%", height: "100%" }}
      ref={model}
      src={props.src}
      camera-orbit={props.cameraOrbit}
    >
      {!!props.children && props.children}
    </model-viewer>
  );
}

export default ModelViewer;
