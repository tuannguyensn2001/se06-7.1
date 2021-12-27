import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function useFormEditor() {
  const form = useForm({
    defaultValues: {
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
    },
  });

  return form;
}
