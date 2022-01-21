import useEditorContext from "@/features/my_models_editor/hooks/useEditorContext";
import { Controller } from "react-hook-form";
import { Checkbox } from "@chakra-ui/react";

function Zoom() {
  const { control } = useEditorContext();

  return (
    <div>
      <Controller
        name={"disableZoom"}
        control={control}
        render={({ field }) => (
          <Checkbox isChecked={field.value} onChange={field.onChange}>
            Bật zoom
          </Checkbox>
        )}
      />
    </div>
  );
}

export default Zoom;
