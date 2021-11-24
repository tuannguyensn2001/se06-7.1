import { notification } from "antd";

function render(type, message, description) {
  return notification[type]({
    message,
    description,
  });
}

export default function useNotification() {
  return {
    success(message, description = "") {
      return render("success", message, description);
    },
    error(message, description = "") {
      return render("error", message, description);
    },
  };
}
