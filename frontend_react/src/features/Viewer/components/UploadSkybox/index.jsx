import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { fetchUploadFile } from "@/services/upload";
import { useEffect, useState } from "react";

function UploadSkybox({ setSkybox: dispatchSetSkybox }) {
  const [skybox, setSkybox] = useState("");

  const beforeUpload = async (file) => {
    const form = new FormData();

    form.append("file", file);
    form.append("type", "models");

    const response = await fetchUploadFile(form);

    setSkybox(response.data.data);

    return false;
  };

  useEffect(() => {
    if (!skybox) return;
    dispatchSetSkybox(skybox);
  }, [skybox]);

  return (
    <div>
      <Upload showUploadList={false} beforeUpload={beforeUpload}>
        <Button icon={<UploadOutlined />}>Upload Skybox</Button>
      </Upload>
    </div>
  );
}

export default UploadSkybox;
