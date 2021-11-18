import { useState } from "react";
import "./App.css";
import axios from "axios";
import AppRouter from "./Router";
// import Cookies from "universal-cookie";

export default function App() {
  // const [userId, setUserId] = useState("");
  // const [myToken, setmyToken] = useState("");
  // const cookies = new Cookies();
  // function getCookie() {
  //   const cUserId = cookies.get("userId");
  //   const cMyToken = cookies.get("myToken");
  //   setUserId(cUserId);
  //   setmyToken(cMyToken);
  // }
  // useEffect(() => {
  //   getCookie();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const [userObj, setUserObj] = useState(null);
  const refreshLogin = (obj) => {
    setUserObj(obj);
  };

  const [allList, setAllList] = useState([]);
  const refreshAllList = async () => {
    if (Boolean(userObj)) {
      await axios
        .get(
          `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms`
        )
        .then((res) => {
          setAllList(res.data.data);
        });
      // .catch((err) => {
      //   if (err.response.data.error === "Unauthorized") {
      //     alert("로그인 후 다시 이용해주세요");
      //   } else {
      //     console.log(err.response);
      //   }
      // });
    }
  };
  const [enterList, setEnterList] = useState([]);
  const refreshEnterList = async () => {
    if (Boolean(userObj)) {
      await axios
        .get(
          `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/participating`
        )
        .then((res) => {
          setEnterList(res.data.data);
        });
    }
  };

  return (
    <AppRouter
      isLoggedin={Boolean(userObj)}
      userObj={userObj}
      refreshLogin={refreshLogin}
      allList={allList}
      refreshAllList={refreshAllList}
      enterList={enterList}
      refreshEnterList={refreshEnterList}
    />
  );
}
