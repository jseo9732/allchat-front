import AppRouter from "./Router";
import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function App() {
  const [myToken, setmyToken] = useState("");
  const cookies = new Cookies();

  function getCookie() {
    const cValue = cookies.get("myToken");
    setmyToken(cValue);
  }

  useEffect(() => {
    getCookie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AppRouter myToken={myToken} />;
}
