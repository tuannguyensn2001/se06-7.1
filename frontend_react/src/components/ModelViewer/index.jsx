import useModelViewer from "@/hooks/useModelViewer";

function ModelViewer(props) {
  const { model } = useModelViewer(props);

  return (
    <model-viewer
      style={{ width: "100%", height: "100%" }}
      ref={model}
      src={props.src}
      camera-orbit={props.cameraOrbit}
      // autoRotate={true}
      // ar
      // ar-modes="webxr scene-viewer quick-look"
      // ar-scale="auto"
      // ar-placement="floor"
      // ios-src={"./asset/Astronaut.usdz"}
      // xr-environment
      // //touch-action="pan-x"
      //orbit-sensitivity="300"
      // auto-rotate-delay="1"
      // rotation-per-second="0.1rad"
      // interaction-policy="allow-when-focused"
      //field-of-view='100deg'
      // max-camera-orbit="10deg 10deg 5%"
      // min-camera-orbit="100deg 100deg 0%"
      //max-field-of-view="175deg"
      //bounds="legacy"
      
    >
      {!!props.children && props.children}
    </model-viewer>
  );
}

export default ModelViewer;
