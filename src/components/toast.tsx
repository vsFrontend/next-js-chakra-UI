import { useToast } from "@chakra-ui/toast";

let toastRef;

const Toast = () => {
  toastRef = useToast();
  return null;
};

export const toastActions = {
  success(msg, ...rest) {
    this.customeToast(msg, "success", ...rest);
  },
  warning(msg, ...rest) {
    this.customeToast(msg, "warning", ...rest);
  },
  info(msg, ...rest) {
    this.customeToast(msg, "info", ...rest);
  },
  error(msg, ...rest) {
    this.customeToast(msg, "error", ...rest);
  },
  customeToast(msg, variant = "success", ...rest) {
    toastRef({
      title: msg,
      status: variant,
      isClosable: true,
      position: "top-right",
      ...rest,
    });
  },
};

export default Toast;
