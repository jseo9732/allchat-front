import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [loginFail, setLoginFail] = useState(false);

  function setCookie(cName, cValue, cDay) {
    const expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    let cookies = cName + "=" + escape(cValue) + "; path=/ ";
    if (typeof cDay != "undefined")
      cookies += ";expires=" + expire.toGMTString() + ";";
    document.cookie = cookies;
  }

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const onUserPwChange = (e) => {
    setUserPw(e.target.value);
  };

  const onLoginClick = (e) => {
    e.preventDefault();

    if (userId === "" || userPw === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
    } else {
      axios(
        "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username: userId,
            password: userPw,
          },
        }
      )
        .then((res) => {
          const accessToken = res.data.jwtToken;
          setCookie("isLogin", accessToken, 30);
          document.location.href = "/";
        })
        .catch((err) => {
          setLoginFail(!err.response.data.data);
        });
    }
  };

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
          value={userId}
          onChange={onUserIdChange}
        />
        <input
          className="loginInput"
          id="userPw"
          name="userPw"
          type="password"
          placeholder="Password"
          required
          value={userPw}
          onChange={onUserPwChange}
        />
        {loginFail && (
          <div className="Warning">
            아이디 또는 비밀번호가 잘못 입력 되었습니다. <br />
            <b>아이디</b>와 <b>비밀번호</b>를 정확히 입력해 주세요.
          </div>
        )}

        <button className="loginBtn" type="submit" onClick={onLoginClick}>
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
