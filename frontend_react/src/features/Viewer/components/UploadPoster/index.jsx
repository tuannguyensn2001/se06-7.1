import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { fetchUploadFile } from "@/services/upload";
import { useEffect, useState } from "react";

function UploadPoster({ setPoster: dispatchSetPoster }) {
  const [poster, setPoster] = useState("");

  const beforeUpload = async (file) => {
    const form = new FormData();

    form.append("file", file);
    form.append("type", "posters");

    const response = await fetchUploadFile(form);

    setPoster(response.data.data);

    return false;
  };

  useEffect(() => {
    if (!poster) return;
    dispatchSetPoster(poster);
  }, [poster]);

  return (
    <div>
      <Upload showUploadList={false} beforeUpload={beforeUpload}>
        <Button icon={<UploadOutlined />}>Upload Poster</Button>
      </Upload>
    </div>
  );
}

export default UploadPoster;
