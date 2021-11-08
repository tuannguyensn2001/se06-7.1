import { Checkbox, InputNumber, Select } from "antd";
import { Controller } from "react-hook-form";
import { SketchPicker } from "react-color";
import FormItemInput from "antd/lib/form/FormItemInput";
import styled from "styled-components";
import { Option } from "antd/lib/mentions";
import FormItem from "antd/lib/form/FormItem";
import Form from "antd/lib/form/FormItem";

function SettingsCamera({ control }) {
  const InputNumberComponent = styled(InputNumber)`
    width: 80px;
    margin-left: 8px;
    margin-bottom: 8px;
  `;
  const SelectComponent = styled(Select)`
    width: 80px;
    margin-left: 8px;
    margin-bottom: 8px;
  `;
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

      <Controller
        control={control}
        name={"autoRotate"}
        render={({ field }) => (
          <Checkbox {...field} checked={field.value}>
            Bật tự động xoay
          </Checkbox>
        )}
      />

      <Controller
        control={control}
        name={"autoRotateDelay"}
        render={({ field }) => (
          <FormItemInput>
            Auto Rotate Delay
            <InputNumberComponent  {...field}
              size="small" min={0}
              value={field.value} onChange={field.onChange}>
            </InputNumberComponent>
          </FormItemInput>
        )}
      />

      <FormItemInput>
        CameraOrbit
        <Controller
          control={control}
          name={"cameraOrbit1"}
          render={({ field }) => (
            <FormItemInput >
              theta
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />

        <Controller
          control={control}
          name={"cameraOrbit2"}
          render={({ field }) => (
            <FormItemInput>
              phi
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />
        <Controller
          control={control}
          name={"cameraOrbit3"}
          render={({ field }) => (
            <FormItemInput>
              radius
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />
      </FormItemInput>

      <Controller
        control={control}
        name={"interactionPolicy"}
        render={({ field }) => (
          <FormItemInput>
            interactionPolicy
            <SelectComponent {...field} style={{ width: 180 }} size="middle" >
              <Option value="allow-when-focused">allow-when-focused</Option>
              <Option value="always-allow">always-allow</Option>
            </SelectComponent>
          </FormItemInput>
        )}
      />

      <Controller
        control={control}
        name={"rotationPerSecond"}
        render={({ field }) => (
          <FormItemInput>
            Tốc độ quay
            <InputNumberComponent  {...field}
              size="small" min={0}
              value={field.value} onChange={field.onChange}>
            </InputNumberComponent>
          </FormItemInput>
        )}
      />


      <Controller
        control={control}
        name={"fieldOfView"}
        render={({ field }) => (
          <FormItemInput>
            fieldOfView
            <InputNumberComponent  {...field}
              size="small" min={0} max={180}
              value={field.value} onChange={field.onChange}>
            </InputNumberComponent>
          </FormItemInput>
        )}
      />

      <Controller
        control={control}
        name={"maxFieldOfView"}
        render={({ field }) => (
          <FormItemInput>
            maxFieldOfView
            <InputNumberComponent  {...field}
              size="small" min={0}
              value={field.value} onChange={field.onChange}>
            </InputNumberComponent>
          </FormItemInput>
        )}
      />

      <Controller
        control={control}
        name={"minFieldOfView "}
        render={({ field }) => (
          <FormItemInput>
            minFieldOfView
            <InputNumberComponent  {...field}
              size="small" min={0}
              value={field.value} onChange={field.onChange}>
            </InputNumberComponent>
          </FormItemInput>
        )}
      />

      <Controller
        control={control}
        name={"interpolationDecay"}
        render={({ field }) => (
          <FormItemInput>
            interpolationDecay
            <InputNumberComponent  {...field}
              size="small" min={0}
              value={field.value} onChange={field.onChange}>
            </InputNumberComponent>
          </FormItemInput>
        )}
      />

      <FormItemInput>
        MinCameraOrbit
        <Controller
          control={control}
          name={"minCameraOrbit1"}
          render={({ field }) => (
            <FormItemInput >
              theta
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />

        <Controller
          control={control}
          name={"minCameraOrbit2"}
          render={({ field }) => (
            <FormItemInput>
              phi
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />
        
        <Controller
          control={control}
          name={"minCameraOrbit3"}
          render={({ field }) => (
            <FormItemInput>
              radius
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />
      </FormItemInput>


      <FormItemInput>
        MaxCameraOrbit

        <Controller
          control={control}
          name={"maxCameraOrbit1"}
          render={({ field }) => (
            <FormItemInput >
              theta
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />

        <Controller
          control={control}
          name={"maxCameraOrbit2"}
          render={({ field }) => (
            <FormItemInput>
              phi
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />

        <Controller
          control={control}
          name={"maxCameraOrbit3"}
          render={({ field }) => (
            <FormItemInput>
              radius
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />
      </FormItemInput>

      <FormItemInput>
        CameraTarget

        <Controller
          control={control}
          name={"cameraTarget1"}
          render={({ field }) => (
            <FormItemInput >
              theta
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />

        <Controller
          control={control}
          name={"cameraTarget2"}
          render={({ field }) => (
            <FormItemInput>
              phi
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />

        <Controller
          control={control}
          name={"cameraTarget3"}
          render={({ field }) => (
            <FormItemInput>
              radius
              <InputNumberComponent {...field}
                size="small" min={0}
                value={field.value} onChange={field.onChange}>
              </InputNumberComponent>
            </FormItemInput>
          )}
        />
      </FormItemInput>

    </div>

  );
}

export default SettingsCamera;
