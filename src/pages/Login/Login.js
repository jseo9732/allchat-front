import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login({ refreshLogin }) {
  // 아이디 입력창 관련
  const [userName, setUserName] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
    setInputNull(false);
  };

  // 비밀번호 입력 창 관련
  const [userPw, setUserPw] = useState("");

  const onUserPwChange = (e) => {
    setUserPw(e.target.value);
    setInputNull(false);
  };

  // 로그인 버튼 클릭 시
  const [inputNull, setInputNull] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const onLoginClick = (e) => {
    e.preventDefault();

    if (userName === "" || userPw === "") {
      setInputNull(!userName || !userPw);
      setLoginFail(false);
    } else {
      getUserObj();
    }
  };

  const getUserObj = async () => {
    await axios(
      "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: userName,
          password: userPw,
        },
      }
    )
      .then((res) => {
        const userObj = res.data;
        refreshLogin(userObj);
        axios.defaults.headers.common["Authorization"] = `${userObj.jwtToken}`;
      })
      .catch((err) => {
        console.log(err);
        setInputNull(false);
        setLoginFail(true);
      });
  };

  return (
    <div className="loginContainer">
      <h1 className="title">AllChat</h1>
      <form className="loginForm">
        <input
          type="text"
          className="loginInput"
          placeholder="ID"
          required
          autoFocus
          value={userName}
          onChange={onUserNameChange}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Password"
          required
          value={userPw}
          onChange={onUserPwChange}
        />
        {inputNull && (
          <div className="Warning">아이디와 비밀번호를 입력해주세요.</div>
        )}
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
          className="KakaoLoginBtn"
          href={`https://kauth.kakao.com/oauth/authorize?client_id=3e716bc2780a7b5fe1da319c4487c6f9&redirect_uri=http://localhost:3000/kakaologin&response_type=code`}
        >
          <i class="fas fa-comment"></i>
          <div>카카오 로그인</div>
        </a>
      </form>
      <Link to="/signup" className="toSignupBtn">
        회원가입
      </Link>
    </div>
  );
}
