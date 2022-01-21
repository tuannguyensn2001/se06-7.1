import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";

function UploadModel() {
  return (
    <div>
      <Upload>
        <Button icon={<UploadOutlined />}>Upload HDR</Button>
      </Upload>
    </div>
  );
}

export default UploadModel;
