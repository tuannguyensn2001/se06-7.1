import Layout from "@/layouts/Default";
import ModelViewer from "@/components/ModelViewer";
import styles from "./style.module.scss";
import clsx from "clsx";
import { useRef } from "react";
import TabModel from "@/features/my_models_editor/components/TabModel";

function MyModelsCreate() {
  const model = useRef(null);

  return (
    <Layout>
      <div className={styles.main}>
        <div
          className={clsx([
            "tw-grid tw-grid-cols-12 tw-gap-4 tw-divide-x tw-h-full ",
            styles.main,
          ])}
        >
          <div className={"tw-h-full tw-w-full tw-col-span-9 "}>
            <ModelViewer ref={model} src={"http://localhost:3000//Horse.glb"} />
          </div>
          <div className={"tw-col-span-3"}>
            <TabModel />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyModelsCreate;
