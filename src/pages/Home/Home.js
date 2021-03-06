import { useEffect } from "react";
import "./Home.css";

export default function Home({
  userObj,
  refreshLogin,
  refreshAllList,
  refreshEnterList,
}) {
  const onLogoutClick = () => {
    refreshLogin(null);
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
          ๋ก๊ทธ์์
        </button>
        <div className="homeTitle">AllChat</div>
      </div>
    </>
  );
}
