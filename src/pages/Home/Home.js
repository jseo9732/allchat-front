import { useEffect } from "react";
import "./Home.css";
// import Cookies from "universal-cookie";

export default function Home({
  userObj,
  refreshLogin,
  refreshAllList,
  refreshEnterList,
}) {
  // const cookies = new Cookies();

  const onLogoutClick = () => {
    refreshLogin(null);
    // cookies.remove("myToken");
    // cookies.remove("userId");
    // alert("로그아웃 되었습니다.");
  };

  useEffect(() => {
    refreshAllList();
    refreshEnterList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="homeContainer">
        <button className="LogoutBtn" onClick={onLogoutClick}>
          로그아웃
        </button>
        <div className="homeTitle">AllChat</div>
      </div>
    </>
  );
}
