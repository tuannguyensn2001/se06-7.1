import Layout from "@/layouts/Default";
import ModelViewer from "@/components/ModelViewer";
import styles from "./style.module.scss";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import TabModel from "@/features/my_models_editor/components/TabModel";
import EditorContext from "@/features/my_models_editor/context";
import { useForm } from "react-hook-form";

function MyModelsCreate() {
  const model = useRef(null);

  const { control, watch } = useForm({
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
    },
  });

  useEffect(() => {
    console.log(watch("cameraOrbit"));
  }, [watch("cameraOrbit")]);

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
              />
            </div>
            <div className={"tw-col-span-3"}>
              <TabModel />
            </div>
          </EditorContext.Provider>
        </div>
      </div>
    </Layout>
  );
}

export default MyModelsCreate;
