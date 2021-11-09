import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <h1 className="title">AllChat</h1>
      <form className="loginForm">
        <input
          className="loginInput"
          id="userId"
          name="userId"
          type="text"
          placeholder="ID"
          required
        />
        <input
          className="loginInput"
          id="userPw"
          name="userPw"
          type="password"
          placeholder="Password"
          required
        />
        <button className="loginBtn" type="submit">
          로그인
        </button>
        <a
          className="kakaoLogin"
          href="https://kauth.kakao.com/oauth/authorize?client_id={3e716bc2780a7b5fe1da319c4487c6f9}&redirect_uri={REDIRECT_URI}&response_type=code"
        >
          <img alt="카카오 로그인" src="/image/kakao_login_medium_wide.png" />
        </a>
      </form>
      <Link to="/signup" className="toSignupBtn">
        회원가입
      </Link>
    </div>
  );
}
