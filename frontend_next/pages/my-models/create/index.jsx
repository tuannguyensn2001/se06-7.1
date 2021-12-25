import Layout from "@/layouts/Default";
import ModelViewer from "@/components/ModelViewer";
import styles from "./style.module.scss";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import TabModel from "@/features/my_models_editor/components/TabModel";
import EditorContext from "@/features/my_models_editor/context";
import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/react";

function MyModelsCreate() {
  const model = useRef(null);

  const { control, watch, handleSubmit } = useForm({
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

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className={styles.main}>
        <div
          className={clsx([
            "tw-grid tw-grid-cols-12 tw-gap-4 tw-divide-x tw-h-full ",
            styles.main,
          ])}
        >
          <EditorContext.Provider value={{ control, watch }}>
            <div className={"tw-h-full tw-w-full tw-col-span-9 "}>
              <ModelViewer
                ref={model}
                src={"http://localhost:3000//Horse.glb"}
                cameraControls={watch("cameraControls")}
                disableZoom={!watch("disableZoom")}
                autoRotate={watch("autoRotate")}
                autoRotateDelay={watch("autoRotateDelay")}
                rotationPerSecond={watch("rotationPerSecond")}
                cameraOrbit={watch("cameraOrbit")?.map((item) =>
                  Number(item.value)
                )}
                minCameraOrbit={watch("minCameraOrbit")?.map((item) =>
                  Number(item.value)
                )}
                maxCameraOrbit={watch("maxCameraOrbit")?.map((item) =>
                  Number(item.value)
                )}
                cameraTarget={watch("cameraTarget")?.map((item) =>
                  Number(item.value)
                )}
                fieldOfView={watch("fieldOfView")}
                minFieldOfView={watch("minFieldOfView")}
                maxFieldOfView={watch("maxFieldOfView")}
                interactionPolicy={watch("interactionPolicy")}
                interpolationDecay={watch("interpolationDecay")}
              />
            </div>
            <div className={styles.editor}>
              <Button onClick={handleSubmit(submit)}>Lưu</Button>
              <TabModel />
            </div>
          </EditorContext.Provider>
        </div>
      </div>
    </Layout>
  );
}

export default MyModelsCreate;
