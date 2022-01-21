import { Modal as ModalAntd, Input } from "antd";
import { Controller } from "react-hook-form";

function Modal({ control, visible, closeModal, onSubmit }) {
  return (
    <div>
      <ModalAntd
        onCancel={closeModal}
        onOk={onSubmit}
        centered
        title={"Sửa tên model"}
        visible={visible}
      >
        <Controller
          control={control}
          name={"name"}
          render={({ field }) => (
            <Input value={field.value} onChange={field.onChange} />
          )}
        />
      </ModalAntd>
    </div>
  );
}

export default Modal;
