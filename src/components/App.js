import AppRouter from "./Router";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function getCookie(cName) {
    cName = cName + "=";
    let cookieData = document.cookie;
    let start = cookieData.indexOf(cName);
    let cValue = "";
    if (start !== -1) {
      start += cName.length;
      var end = cookieData.indexOf(";", start);
      if (end === -1) end = cookieData.length;
      cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
  }

  useEffect(() => {
    const jwtToken = getCookie("isLogin");
    setIsLoggedIn(jwtToken);
  }, []);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}
