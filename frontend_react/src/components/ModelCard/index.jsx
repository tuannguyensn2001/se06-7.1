import { Card, Avatar, Modal } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { confirm } = Modal;

function ModelCard({ onClick, id, name, onDelete, img }) {
  const handleClick = () => {
    onClick(id, name);
  };

  const handleDelete = () => {
    confirm({
      title: "Bạn chắc chắn muốn xóa model này ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      centered: true,
      onOk() {
        console.log("ok");
        onDelete(id);
      },
    });
  };

  return (
    <div>
      <Card
        cover={<img alt="example" src={img} />}
        actions={[
          <EditOutlined onClick={handleClick} key="edit" />,
          <DeleteOutlined onClick={handleDelete} key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<Link to={`/my-models/${id}`}>{name}</Link>}
          description="This is the description"
        />
      </Card>
      ,
    </div>
  );
}

export default ModelCard;
