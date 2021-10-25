import { Checkbox } from "antd";
import { Controller } from "react-hook-form";
import { SketchPicker } from "react-color";

function SettingsCamera({ control }) {
  return (
    <div>
      <Controller
        control={control}
        name={"cameraControls"}
        render={({ field }) => (
          <Checkbox {...field} checked={field.value}>
            Tắt/bật camera
          </Checkbox>
        )}
      />

      <Controller
        control={control}
        name={"disableZoom"}
        render={({ field }) => (
          <Checkbox {...field} checked={field.value}>
            Tắt/bật phần zoom
          </Checkbox>
        )}
      />
      <Controller
        control={control}
        name={"baseColor"}
        render={({ field }) => {
          const onChange = (color) => {
            console.log(color);
          };

          return (
            <SketchPicker
              onChangeComplete={field.onChange}
              color={field.value}
            />
          );
        }}
      />
    </div>
  );
}

export default SettingsCamera;
