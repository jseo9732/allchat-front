import ChatList from "../../components/ChatList";
import "./Home.css";
// import Cookies from "universal-cookie";

export default function Home({ refreshLogin, userObj }) {
  // const cookies = new Cookies();

  const onLogoutClick = () => {
    refreshLogin(null);
    // cookies.remove("myToken");
    // cookies.remove("userId");
    // alert("로그아웃 되었습니다.");
  };
  return (
    <>
      <ChatList userObj={userObj} />
      <div className="homeContainer">
        <button className="LogoutBtn" onClick={onLogoutClick}>
          로그아웃
        </button>
        <div className="homeTitle">AllChat</div>
      </div>
    </>
  );
}
