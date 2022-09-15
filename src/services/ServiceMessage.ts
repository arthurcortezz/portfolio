import { toast, TypeOptions } from "react-toastify";

const ServiceMessage = {
  config: {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
  },
  error: (message: string) => {
    console.log("here");
    ServiceMessage.toast(message, toast.TYPE.ERROR);
  },
  succes: (message: string) => {
    ServiceMessage.toast(message, toast.TYPE.SUCCESS);
  },
  warn: (message: string) => {
    ServiceMessage.toast(message, toast.TYPE.WARNING);
  },
  info: (message: string) => {
    ServiceMessage.toast(message, toast.TYPE.INFO);
  },
  toast: (message: string, type: TypeOptions) => {
    toast(message, {
      ...ServiceMessage.config,
      type: type,
    });
  },
};

export default ServiceMessage;
