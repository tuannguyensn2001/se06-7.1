import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { fetchUploadFile } from "@/services/upload";
import { useEffect, useState } from "react";

function UploadEnvImage({ setEnvImage: dispatchEnvImage }) {
  const [envImage, setEnvImage] = useState("");

  const beforeUpload = async (file) => {
    const form = new FormData();

    form.append("file", file);
    form.append("type", "models");

    const response = await fetchUploadFile(form);

    setEnvImage(response.data.data);

    return false;
  };

  useEffect(() => {
    if (!envImage) return;
    dispatchEnvImage(envImage);
  }, [envImage]);

  return (
    <div>
      <Upload showUploadList={false} beforeUpload={beforeUpload}>
        <Button icon={<UploadOutlined />}>Upload Env Image</Button>
      </Upload>
    </div>
  );
}

export default UploadEnvImage;
