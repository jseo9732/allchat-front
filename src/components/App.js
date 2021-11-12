import AppRouter from "./Router";
import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function App() {
  const [userId, setUserId] = useState("");
  const [myToken, setmyToken] = useState("");
  const cookies = new Cookies();

  function getCookie() {
    const cUserId = cookies.get("userId");
    const cMyToken = cookies.get("myToken");
    setUserId(cUserId);
    setmyToken(cMyToken);
  }

  useEffect(() => {
    getCookie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AppRouter userId={userId} myToken={myToken} />;
}
