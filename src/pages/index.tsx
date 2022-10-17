import { useState } from "react";
import { CommentController } from "../controllers";
import Manager from "./manager";

export default function Home() {
  const [login, setLogin] = useState<string>("auth");
  const showLogin = (value: any) => {
    // if (login === "login") {
    //   return <Login setLogin={setLogin} value={value} />;
    // }
    if (login === "auth") {
      return <Manager />;
    }
  };
  async function registerServiceWorker() {
    if (navigator) {
      const registration = await navigator.serviceWorker.register("/sw.js");
      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: process.env.NEXT_STATIC_PUB_KEY,
        });
        return;
      }
      console.log("🚀 ~ file: index.tsx ~ line 62 ~ registerServiceWorker ~ subscription", subscription);
      await CommentController.notificacoesPush(subscription);
    }
  }
  async function askPermission() {
    const permission = await Notification.requestPermission();
    console.log("🚀 ~ file: index.tsx ~ line 74 ~ askPermission ~ permission", permission);
    if (permission === "granted") {
      registerServiceWorker();
    }
  }
  return showLogin(login);
}
