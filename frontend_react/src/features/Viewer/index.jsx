import ModelViewer from "@/components/ModelViewer";
import SettingsCamera from "@/features/Viewer/components/SettingsCamera";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, Tabs } from "antd";
import styles from "./style.module.scss";
import UploadSkybox from "@/features/Viewer/components/UploadSkybox";
import UploadModelDrag from "@/features/Viewer/components/UploadModelDrag";
import useCreateModel from "@/features/Viewer/hooks/useCreateModel";

function Viewer() {
  const { watch, control, handleSubmit, setValue, register } = useForm({
    defaultValues: {
      cameraControls: true,
      disableZoom: false,
      autoRotate: false,
      default: 0,
      checkExposure: true,
      checkMetalness: true,
      checkRoughness: true,
    },
  });

  const create = useCreateModel();

  const setSrc = (src) => setValue("model", src);
  const setSkybox = (src) => setValue("skybox", src);
  const submit = (data) => {
    create.mutate(data);
  };

  return (
    <div>
      <div className={"grid grid-cols-12 gap-4 divide-x "}>
        <div className={styles.model_viewer}>
          {!watch("model") && (
            <div className={"h-full flex flex-col justify-center"}>
              <UploadModelDrag setSrc={setSrc} />
            </div>
          )}

          {watch("model") && (
            <ModelViewer
              src={watch("model")}
              baseColor={watch("baseColor")}
              disableZoom={watch("disableZoom")}
              cameraControls={watch("cameraControls")}
              autoRotate={watch("autoRotate")}
              // srcSkybox={"./asset/whipple_creek_regional_park_04_1k.hdr"}
              srcSkybox={watch("skybox")}
              autoRotateDelay={[watch("autoRotateDelay")]}
              cameraOrbit={[
                watch("cameraOrbit1"),
                watch("cameraOrbit2"),
                watch("cameraOrbit3"),
              ]}
              cameraTarget={[
                watch("cameraTarget1"),
                watch("cameraTarget2"),
                watch("cameraTarget3"),
              ]}
              rotationPerSecond={[watch("rotationPerSecond")]}
              interactionPolicy={watch("interactionPolicy")}
              fieldOfView={[watch("fieldOfView")]}
              maxCameraOrbit={[
                watch("maxCameraOrbit1"),
                watch("maxCameraOrbit2"),
                watch("maxCameraOrbit3"),
              ]}
              minCameraOrbit={[
                watch("minCameraOrbit1"),
                watch("minCameraOrbit2"),
                watch("minCameraOrbit3"),
              ]}
              maxFieldOfView={[watch("maxFieldOfView")]}
              minFieldOfView={[watch("maxFieldOfView")]}
              interpolationDecay={[watch("interpolationDecay")]}
              orientation={[
                watch("orientationX"),
                watch("orientationY"),
                watch("orientationZ"),
              ]}
              scale={[watch("scaleX"), watch("scaleY"), watch("scaleZ")]}
              metalness={[watch("metalness"), watch("checkMetalness")]}
              roughness={[watch("roughness"), watch("checkRoughness")]}
              exposure={[watch("exposure"), watch("checkExposure")]}
              // shadowIntensity={[watch("shadowIntensity")]}
            />
          )}
        </div>
        <div className={"col-span-3 px-4 "}>
          <div className="flex justify-end mt-4">
            <Button onClick={handleSubmit(submit)}>Lưu</Button>
          </div>
          <Tabs defaultActiveKey={3}>
            <Tabs.TabPane key={3} tab={"Thông tin model"}>
              <div>
                <div>Tên model</div>
                <div>
                  <Controller
                    control={control}
                    name={"name"}
                    render={({ field }) => (
                      <Input value={field.value} onChange={field.onChange} />
                    )}
                  />
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane key={1} tab={"Upload"}>
              <UploadSkybox setSkybox={setSkybox} />
            </Tabs.TabPane>
            <Tabs.TabPane key={2} tab={"Editor"}>
              <SettingsCamera control={control} watch={watch} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Viewer;
