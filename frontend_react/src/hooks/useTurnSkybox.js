import { useEffect } from "react";

export default function useTurnSkybox(model, srcSkybox) {
  useEffect(() => {
    if (!model?.current) return;
    if (srcSkybox) {
      model.current.setAttribute("skybox-image", srcSkybox);

      // let lastX;
      // let panning = false;
      // let skyboxAngle = 0;
      // let radiansPerPixel;

      // const startPan = () => {
      //     const orbit = model.current.getCameraOrbit();
      //     const { radius } = orbit;
      //     radiansPerPixel = -1 * radius / model.current.getBoundingClientRect().height;
      //     model.current.interactionPrompt = 'none';
      // };

      // const updatePan = (thisX) => {
      //     const delta = (thisX - lastX) * radiansPerPixel;
      //     lastX = thisX;
      //     skyboxAngle += delta;
      //     const orbit = model.current.getCameraOrbit();
      //     orbit.theta += delta;
      //     model.current.cameraOrbit = orbit.toString();
      //     model.current.resetTurntableRotation(skyboxAngle);
      //     model.current.jumpCameraToGoal();
      // }

      // model.current.addEventListener('mousedown', (event) => {
      //     panning = event.button === 2 || event.ctrlKey || event.metaKey || event.shiftKey;
      //     if (!panning)
      //     return;

      //     lastX = event.clientX;
      //     startPan();
      //     event.stopPropagation();
      // }, true);

      // model.current.addEventListener('touchstart', (event) => {
      //     const {targetTouches, touches} = event;
      //     panning = targetTouches.length === 2 && targetTouches.length === touches.length;
      //     if (!panning)
      //     return;

      //     lastX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
      //     startPan();
      // }, true);

      // window.self.addEventListener('mousemove', (event) => {
      //     if (!panning)
      //     return;

      //     updatePan(event.clientX);
      //     event.stopPropagation();
      // }, true);

      // model.current.addEventListener('touchmove', (event) => {
      //     if (!panning || event.targetTouches.length !== 2)
      //     return;

      //     const {targetTouches} = event;
      //     const thisX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
      //     updatePan(thisX);
      // }, true);

      // window.self.addEventListener('mouseup', (event) => {
      //     panning = false;
      // }, true);

      // model.current.addEventListener('touchend', (event) => {
      //     panning = false;
      // }, true);
      return;
    }
    model.current.removeAttribute("skybox-image");
  }, [model, srcSkybox]);
}
