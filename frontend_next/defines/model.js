const defineModel = {};

Object.defineProperty(defineModel, 'defaultValue', {
  value: {
    cameraControls: true,
    cameraOrbit: [
      { value: undefined },
      { value: undefined },
      { value: undefined },
    ],
    minCameraOrbit: [
      { value: undefined },
      { value: undefined },
      { value: undefined },
    ],
    maxCameraOrbit: [
      { value: undefined },
      { value: undefined },
      { value: undefined },
    ],
    cameraTarget: [
      { value: undefined },
      { value: undefined },
      { value: undefined },
    ],
    name: '',
  },
  writable: false,
});

export default defineModel;
