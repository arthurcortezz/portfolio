import { useState } from "react";
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
  return showLogin(login);
}
