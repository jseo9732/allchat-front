import "./Home.css";
// import Cookies from "universal-cookie";

export default function Home({ refreshLogin }) {
  // const cookies = new Cookies();

  const onLogoutClick = () => {
    refreshLogin(null);
  };
  return (
    <div className="homeContainer">
      <button className="LogoutBtn" onClick={onLogoutClick}>
        로그아웃
      </button>
      <div className="homeTitle">AllChat</div>
    </div>
  );
}
