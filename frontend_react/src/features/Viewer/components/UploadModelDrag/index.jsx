import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { fetchUploadFile } from "@/services/upload";
import { useEffect, useState } from "react";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  directory: false,
  showUploadList: false,
  onChange(info) {
    // console.log(info);
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function UploadModelDrag({ setSrc }) {
  const [model, setModel] = useState("");

  const beforeUpload = async (file) => {
    const form = new FormData();

    form.append("file", file);
    form.append("type", "models");

    const response = await fetchUploadFile(form);

    // setSrc(response.data.data);

    setModel(response.data.data);

    return false;
  };

  useEffect(() => {
    if (!model) return;

    setSrc(model);
  }, [model]);

  return (
    <div>
      <Dragger {...props} beforeUpload={beforeUpload}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click hoặc kéo file vào để upload model
        </p>
        <p className="ant-upload-hint"></p>
      </Dragger>
      ,
    </div>
  );
}

export default UploadModelDrag;
