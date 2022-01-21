import { Controller } from "react-hook-form";
import { Checkbox } from "@chakra-ui/react";
import useEditorContext from "@/features/my_models_editor/hooks/useEditorContext";

function CameraControls() {
  const { control } = useEditorContext();

  return (
    <div>
      <Controller
        name={"cameraControls"}
        control={control}
        render={({ field }) => (
          <Checkbox isChecked={field.value} onChange={field.onChange}>
            Bật camera
          </Checkbox>
        )}
      />
    </div>
  );
}

export default CameraControls;
