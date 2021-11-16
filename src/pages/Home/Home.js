import "./Home.css";
import Cookies from "universal-cookie";

export default function Home() {
  const cookies = new Cookies();

  const onLogoutClick = () => {
    cookies.remove("myToken");
    cookies.remove("userId");
    alert("로그아웃 되었습니다.");
    document.location.href = "/";
  };
  return (
    <div className="homeContainer">
      <div className="homeTitle">AllChat</div>
      <button className="LogoutBtn" onClick={onLogoutClick}>
        로그아웃
      </button>
    </div>
  );
}