import { store } from "react-notifications-component";

export const Toast = (title, message, type) => {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-center",
    dismiss: {
      duration: 1000,
    },
  });
};