import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Cookies from "universal-cookie";
import KakaoLogin from "../components/KakaoLogin";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [inputNull, setInputNull] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const cookies = new Cookies();

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
    setInputNull(false);
  };

  const onUserPwChange = (e) => {
    setUserPw(e.target.value);
    setInputNull(false);
  };

  const getToken = async () => {
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
        cookies.set("myToken", accessToken, {
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
        });

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        document.location.href = "/";
      })
      .catch((err) => {
        setInputNull(false);
        setLoginFail(!err.response.data.data);
      });
  };

  const onLoginClick = (e) => {
    e.preventDefault();

    if (userId === "" || userPw === "") {
      setInputNull(!userId || !userPw);
      setLoginFail(false);
    } else {
      getToken();
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
          autoFocus
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
        {inputNull && (
          <div className="Warning">아이디와 비밀번호를 입력해주세요.</div>
        )}

        <button className="loginBtn" type="submit" onClick={onLoginClick}>
          로그인
        </button>
        <KakaoLogin />
      </form>
      <Link to="/signup" className="toSignupBtn">
        회원가입
      </Link>
    </div>
  );
}
