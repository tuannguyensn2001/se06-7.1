import { Checkbox, Collapse, InputNumber, Select, Slider } from "antd";
import { Controller } from "react-hook-form";
import { SketchPicker } from "react-color";
import FormItemInput from "antd/lib/form/FormItemInput";
import styled from "styled-components";
import { Option } from "antd/lib/mentions";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";

const InputNumberComponent = styled(InputNumber)`
  width: 80px;
  margin-left: 8px;
  margin-bottom: 8px;
`;
const SelectComponent = styled(Select)`
  //width: 80px;
  //margin-left: 8px;
  //margin-bottom: 8px;
`;

function SettingsCamera({ control, watch }) {
  const { Panel } = Collapse;

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

      <Collapse>
        <Panel header="Rotate" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="Auto Rotate" key="0">
              <Controller
                control={control}
                name={"autoRotate"}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value}>
                    Auto Rotate
                  </Checkbox>
                )}
              />
            </Panel>
          </Collapse>

          <Collapse defaultActiveKey="1">
            <Panel header="Auto Rotate Delay" key="0">
              <Controller
                control={control}
                name={"autoRotateDelay"}
                render={({ field }) => (
                  <FormItemInput>
                    Delay
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      disabled={!watch("autoRotate")}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          <Collapse defaultActiveKey="1">
            <Panel header="Rotation Per Second" key="0">
              <Controller
                control={control}
                name={"rotationPerSecond"}
                render={({ field }) => (
                  <FormItemInput>
                    Second
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      disabled={!watch("autoRotate")}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>

      <Collapse>
        <Panel header="Camera" key="1">
          {/* orbit */}
          <Collapse defaultActiveKey="1">
            <Panel header="Camera Orbit" key="0">
              <Controller
                control={control}
                name={"cameraOrbit1"}
                render={({ field }) => (
                  <FormItemInput>
                    theta
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"cameraOrbit2"}
                render={({ field }) => (
                  <FormItemInput>
                    phi
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
              <Controller
                control={control}
                name={"cameraOrbit3"}
                render={({ field }) => (
                  <FormItemInput>
                    radius
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          {/* minorbit */}
          <Collapse defaultActiveKey="1">
            <Panel header="Min Camera Orbit" key="0">
              <Controller
                control={control}
                name={"minCameraOrbit1"}
                render={({ field }) => (
                  <FormItemInput>
                    theta
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"minCameraOrbit2"}
                render={({ field }) => (
                  <FormItemInput>
                    phi
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"minCameraOrbit3"}
                render={({ field }) => (
                  <FormItemInput>
                    radius
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          {/* maxorbit */}
          <Collapse defaultActiveKey="1">
            <Panel header="Max Camera Orbit" key="0">
              <Controller
                control={control}
                name={"maxCameraOrbit1"}
                render={({ field }) => (
                  <FormItemInput>
                    theta
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"maxCameraOrbit2"}
                render={({ field }) => (
                  <FormItemInput>
                    phi
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"maxCameraOrbit3"}
                render={({ field }) => (
                  <FormItemInput>
                    radius
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          {/* target */}
          <Collapse defaultActiveKey="1">
            <Panel header="Camera Target" key="0">
              <Controller
                control={control}
                name={"cameraTarget1"}
                render={({ field }) => (
                  <FormItemInput>
                    theta
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"cameraTarget2"}
                render={({ field }) => (
                  <FormItemInput>
                    phi
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />

              <Controller
                control={control}
                name={"cameraTarget3"}
                render={({ field }) => (
                  <FormItemInput>
                    radius
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          <Collapse defaultActiveKey="1">
            <Panel header="Field Of View" key="0">
              <Controller
                control={control}
                name={"fieldOfView"}
                render={({ field }) => (
                  <FormItemInput>
                    fieldOfView
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      max={180}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>

      <Collapse>
        <Panel header="Interaction" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="Interaction Policy" key="0">
              <Controller
                control={control}
                name={"interactionPolicy"}
                render={({ field }) => (
                  <FormItemInput>
                    Policy
                    <SelectComponent
                      {...field}
                      style={{ width: 180 }}
                      size="middle"
                    >
                      <Option value="allow-when-focused">
                        allow-when-focused
                      </Option>
                      <Option value="always-allow">always-allow</Option>
                    </SelectComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          <Collapse defaultActiveKey="1">
            <Panel header="Interpolation Decay" key="0">
              <Controller
                control={control}
                name={"interpolationDecay"}
                render={({ field }) => (
                  <FormItemInput>
                    Decay
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>

      <Collapse>
        <Panel header="Zoom" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="Max Zoom Out" key="0">
              <Controller
                control={control}
                name={"maxFieldOfView"}
                render={({ field }) => (
                  <FormItemInput>
                    maxFieldOfView
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      disabled={watch("disableZoom")}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>

          <Collapse defaultActiveKey="1">
            <Panel header="Max Zoom In" key="0">
              <Controller
                control={control}
                name={"minFieldOfView"}
                render={({ field }) => (
                  <FormItemInput>
                    minFieldOfView
                    <InputNumberComponent
                      {...field}
                      size="small"
                      min={0}
                      disabled={watch("disableZoom")}
                      value={field.value}
                      onChange={field.onChange}
                    ></InputNumberComponent>
                  </FormItemInput>
                )}
              />
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>

      <Collapse>
        <CollapsePanel header="Transform">
          <Collapse>
            <CollapsePanel header="Orientation">
              <FormItemInput>
                <Controller
                  control={control}
                  name={"orientationX"}
                  render={({ field }) => (
                    <FormItemInput>
                      Roll
                      <InputNumberComponent
                        {...field}
                        size="small"
                        min={0}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItemInput>
                  )}
                />

                <Controller
                  control={control}
                  name={"orientationY"}
                  render={({ field }) => (
                    <FormItemInput>
                      Pitch
                      <InputNumberComponent
                        {...field}
                        size="small"
                        min={0}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItemInput>
                  )}
                />

                <Controller
                  control={control}
                  name={"orientationZ"}
                  render={({ field }) => (
                    <FormItemInput>
                      Yaw
                      <InputNumberComponent
                        {...field}
                        size="small"
                        min={0}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItemInput>
                  )}
                />
              </FormItemInput>
            </CollapsePanel>
          </Collapse>

          <Collapse>
            <CollapsePanel header="Scale">
              <FormItemInput>
                <Controller
                  control={control}
                  name={"scaleX"}
                  render={({ field }) => (
                    <FormItemInput>
                      Scale X
                      <InputNumberComponent
                        {...field}
                        size="small"
                        min={0}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItemInput>
                  )}
                />
                <Controller
                  control={control}
                  name={"scaleY"}
                  render={({ field }) => (
                    <FormItemInput>
                      Scale Y
                      <InputNumberComponent
                        {...field}
                        size="small"
                        min={0}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItemInput>
                  )}
                />
                <Controller
                  control={control}
                  name={"scaleZ"}
                  render={({ field }) => (
                    <FormItemInput>
                      ScaleZ
                      <InputNumberComponent
                        {...field}
                        size="small"
                        min={0}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItemInput>
                  )}
                />
              </FormItemInput>
            </CollapsePanel>
          </Collapse>
        </CollapsePanel>
      </Collapse>

      <Collapse>
        <CollapsePanel header="ChangeMaterial">
          <FormItemInput>
            <FormItemInput>
              <Controller
                control={control}
                name="checkMetalness"
                render={({ field }) => (
                  <Checkbox {...field} autoFocus={true} checked={field.value}>
                    Tắt/Bật Metalness
                  </Checkbox>
                )}
              />
              <Controller
                control={control}
                name={"metalness"}
                render={({ field }) => (
                  <FormItemInput>
                    <Slider
                      {...field}
                      mim={0}
                      max={1}
                      step={0.01}
                      disabled={watch("checkMetalness")}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItemInput>
                )}
              />
            </FormItemInput>

            <FormItemInput>
              <Controller
                control={control}
                name="checkRoughness"
                render={({ field }) => (
                  <Checkbox {...field} autoFocus={true} checked={field.value}>
                    Tắt/Bật Roughness
                  </Checkbox>
                )}
              />

              <Controller
                control={control}
                name={"roughness"}
                render={({ field }) => (
                  <FormItemInput>
                    <Slider
                      {...field}
                      mim={0}
                      max={1}
                      step={0.01}
                      disabled={watch("checkRoughness")}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItemInput>
                )}
              />
            </FormItemInput>
          </FormItemInput>
        </CollapsePanel>
      </Collapse>

      <Collapse>
        <CollapsePanel header="Lighting and Enviroment">
          <FormItemInput>
            <Controller
              control={control}
              name="checkExposure"
              render={({ field }) => (
                <Checkbox {...field} autoFocus={true} checked={field.value}>
                  Tắt/Bật Exposure
                </Checkbox>
              )}
            />

            <Controller
              control={control}
              name="exposure"
              render={({ field }) => (
                <FormItemInput>
                  <Slider
                    {...field}
                    min={0}
                    max={20}
                    step={0.01}
                    disabled={watch("checkExposure")}
                    defaultValue={1}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormItemInput>
              )}
            />
          </FormItemInput>

          <Controller
            control={control}
            name="shadowIntensity"
            render={({ field }) => (
              <FormItemInput>
                Shadow
                <Slider
                  {...field}
                  min={0}
                  max={10}
                  step={0.01}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormItemInput>
            )}
          />
        </CollapsePanel>
      </Collapse>
    </div>
  );
}

export default SettingsCamera;
