import { Box, Flex, Link, Spinner, useBoolean, useMediaQuery } from "@chakra-ui/react";
import { LinkProps } from "../types";
import { Menu, MessageToast } from "..";
import { useEffect, useState } from "react";
import { NotificationController } from "../../controllers";

interface Props {
  linkItems: LinkProps[];
}

export default function Container({ linkItems }: Props) {
  useEffect(() => {
    askPermission();
  }, []);
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const [loader, setLoader] = useBoolean(false);
  const [renderItem, setRenderItem] = useState<LinkProps | undefined | null>(linkItems[0]);
  const render = (link: LinkProps) => {
    if (link.active) {
      setRenderItem(null);
      setRenderItem(link);
      setLoader.on;
    }
  };
  async function registerServiceWorker() {
    if ("serviceWorker" in navigator && (await Notification.requestPermission()) === "granted") {
      const registration = await navigator.serviceWorker.register("/serviceWorker.js");
      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: process.env.NEXT_STATIC_VAPID_PUBLIC_KEY,
        });
      }
      await NotificationController.newSubscription(subscription);
    }
  }
  async function askPermission() {
    await Notification.requestPermission();
    registerServiceWorker();
  }
  async function sendNotification() {
    await NotificationController.notificacoesPush();
  }

  return (
    <Menu
      linkItems={linkItems}
      value={renderItem}
      onClickMenu={(link: LinkProps) => {
        if (link && link.render) render(link);
      }}>
      {loader ? (
        <Spinner color="black" label="loading" />
      ) : (
        <Flex minH={"100vh"} bg={"#e6e6e6"} w={isLargerThan ? "70%" : "100%"} direction={"column"}>
          {renderItem?.render}
        </Flex>
      )}
    </Menu>
  );
}
