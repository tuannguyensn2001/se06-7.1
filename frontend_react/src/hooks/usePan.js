import { useEffect } from "react";
export default function usePan(model, pan) {
  useEffect(() => {
    if (!model?.current) return;
    if (pan) {
      model.current.setAttribute("oncontextmenu", "return false");

      // const tapDistance = 2;
      // let panning = false;
      // let panX, panY;
      // let startX, startY;
      // let lastX, lastY;
      // let metersPerPixel;

      // const startPan = () => {
      //   const orbit = model.current.getCameraOrbit();
      //   const {theta, phi, radius} = orbit;
      //   const psi = theta - model.current.turntableRotation;//trả vè hướng xoay tính = radius
      //   metersPerPixel = 0.75 * radius / model.current.getBoundingClientRect().height;// lấy kích thước vị trí (height)
      //   panX = [-Math.cos(psi), 0, Math.sin(psi)];
      //   panY = [
      //     -Math.cos(phi) * Math.sin(psi),
      //     Math.sin(phi),
      //     -Math.cos(phi) * Math.cos(psi)
      //   ];
      //   model.current.interactionPrompt = 'none';
      // };

      // const movePan = (thisX, thisY) => {
      //   const dx = (thisX - lastX) * metersPerPixel;
      //   const dy = (thisY - lastY) * metersPerPixel;
      //   lastX = thisX;
      //   lastY = thisY;

      //   const target = model.current.getCameraTarget();// lấy cameraTarget
      //   target.x += dx * panX[0] + dy * panY[0];
      //   target.y += dx * panX[1] + dy * panY[1];
      //   target.z += dx * panX[2] + dy * panY[2];
      //   model.current.cameraTarget = `${target.x}m ${target.y}m ${target.z}m`;

      //   // This pauses turntable rotation
      //   model.current.dispatchEvent(new CustomEvent(
      //         'camera-change', {detail: {source: 'user-interaction'}}));
      // };

      // const recenter = (pointer) => {
      //   panning = false;
      //   if (Math.abs(pointer.clientX - startX) > tapDistance ||
      //       Math.abs(pointer.clientY - startY) > tapDistance)
      //     return;
      //   const hit = model.current.positionAndNormalFromPoint(pointer.clientX, pointer.clientY);
      //   model.current.cameraTarget =
      //       hit == null ? 'auto auto auto' : hit.position.toString();
      // };

      // // Sự kiện xảy ra khi người dùng bấm nút qua một phần tử
      // model.current.addEventListener('mousedown', (event) => {
      //   startX = event.clientX; //Trả về tọa độ ngang của con trỏ chuột, so với cửa sổ hiện tại, khi sự kiện chuột được kích hoạt
      //   startY = event.clientY; //Trả về tọa độ dọc của con trỏ chuột, liên quan đến cửa sổ hiện tại, khi sự kiện chuột được kích hoạt
      //   panning = event.button === 2 || event.ctrlKey || event.metaKey ||
      //       event.shiftKey;
      //       //nút chuột đã được nhấn khi kích hoạt sự kiện chuột ===2?
      //       //phím "CTRL" có được nhấn khi kích hoạt sự kiện chuột ???
      //       //liệu phím "META" có được nhấn khi một sự kiện được kích hoạt ???
      //       //liệu phím "SHIFT" có được nhấn khi một sự kiện được kích hoạt ???
      //   if (!panning)
      //     return;

      //   lastX = startX;
      //   lastY = startY;
      //   startPan();
      //   event.stopPropagation();
      //   //ngăn chặn phương pháp tuyên truyền của cùng một sự kiện khỏi bị gọi.
      // }, true);

      // //Sự kiện xảy ra khi một ngón tay được đặt trên màn hình cảm ứng
      // model.current.addEventListener('touchstart', (event) => {
      //   const {targetTouches, touches} = event;
      //   //Trả về danh sách tất cả các đối tượng cảm ứng tiếp xúc với bề mặt
      //   //và nơi xảy ra sự kiện touchstart trên cùng một phần tử mục tiêu với phần tử mục tiêu hiện tại
      //   //Trả về danh sách tất cả các đối tượng cảm ứng hiện đang tiếp xúc với bề mặt
      //   startX = targetTouches[0].clientX;
      //   startY = targetTouches[0].clientY;
      //   panning = targetTouches.length === 2 && targetTouches.length === touches.length;
      //   if (!panning)
      //     return;

      //   lastX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
      //   lastY = 0.5 * (targetTouches[0].clientY + targetTouches[1].clientY);
      //   startPan();
      // }, true);

      // // Sự kiện xảy ra khi con trỏ di chuyển khi nó ở trên một phần tử
      // window.self.addEventListener('mousemove', (event) => {
      //   if (!panning)
      //     return;

      //   movePan(event.clientX, event.clientY);
      //   event.stopPropagation();
      //   //ngăn chặn phương pháp tuyên truyền của cùng một sự kiện khỏi bị gọi.
      // }, true);

      // //Sự kiện xảy ra khi một ngón tay được kéo trên màn hình
      // model.current.addEventListener('touchmove', (event) => {
      //   if (!panning || event.targetTouches.length !== 2)
      //     return;

      //   const {targetTouches} = event;
      //   const thisX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
      //   const thisY = 0.5 * (targetTouches[0].clientY + targetTouches[1].clientY);
      //   movePan(thisX, thisY);
      // }, true);

      // //Sự kiện xảy ra khi người dùng thả chuột qua một phần tử
      // window.self.addEventListener('mouseup', (event) => {
      //   recenter(event);
      // }, true);

      // //Sự kiện xảy ra khi ngón tay bị loại khỏi màn hình cảm ứng
      // model.current.addEventListener('touchend', (event) => {
      //   if (event.targetTouches.length === 0) {
      //     recenter(event.changedTouches[0]);

      //     if (event.cancelable) {
      //       event.preventDefault();
      //       //hủy sự kiện nếu nó có thể hủy được
      //     }
      //   }
      // }, true);
    } else model.current.removeAttribute("oncontextmenu");
  }, [model, pan]);
}
