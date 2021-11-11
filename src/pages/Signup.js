import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Signup() {
  const history = useHistory();

  const [userId, setUserId] = useState("");
  const [isUserIdNull, setIsUserIdNull] = useState(false);
  const [isUserIdLen, setIsUserIdLen] = useState(false);
  const [isUserIdDup, setIsUserIdDup] = useState(false);
  const [isNotUserIdDup, setIsNotUserIdDup] = useState(false);

  const onUserIdBlur = (e) => {
    const inputId = e.target.value;
    setIsUserIdNull(inputId === "");
    setIsUserIdLen(inputId !== "" && inputId.length < 2);
    if (inputId.length >= 2) {
      userIdDuplicate(inputId);
    }
  };

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const userIdDuplicate = (inputId) => {
    axios(
      "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/auth/duplicate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: inputId,
        },
      }
    )
      .then((res) => {
        setIsUserIdDup(!res.data.data);
        setIsNotUserIdDup(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");
  const [isUserPwNull, setIsUserPwNull] = useState(false);
  const [isUserPwCheckNull, setIsUserPwCheckNull] = useState(false);
  const [isUserPwLen, setIsUserPwLen] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onUserPwChange = (e) => {
    setUserPw(e.target.value);
  };

  const onUserPwCheckChange = (e) => {
    setUserPwCheck(e.target.value);
  };

  const onUserPwBlur = (e) => {
    setIsUserPwNull(e.target.value === "");
    setIsUserPwLen(e.target.value.length !== 0 && e.target.value.length < 4);
  };

  const onPWCheckBlur = (e) => {
    setIsUserPwCheckNull(e.target.value === "");
    setPasswordError(e.target.value !== userPw);
  };

  const onSignupClick = (e) => {
    e.preventDefault();
    setIsUserIdNull(userId === "");
    setIsUserPwNull(userPw === "");
    setIsUserPwCheckNull(userPwCheck === "");
    setPasswordError(userPwCheck !== userPw);
    if (
      !isUserIdNull &&
      !isUserIdLen &&
      isNotUserIdDup &&
      !isUserPwNull &&
      !isUserPwLen &&
      !isUserPwCheckNull &&
      !passwordError
    ) {
      axios(
        "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/auth/signup",
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
          alert("환영합니다.");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="SignupContainer">
      <h1 className="Signuptitle">회원가입</h1>
      <form className="SignupForm">
        <div className="SignupUserId">
          <label htmlFor="user-id">아이디</label>
          <input
            value={userId}
            name="user-id"
            required
            minLength="2"
            maxLength="20"
            placeholder="사용할 아이디를 입력하세요"
            onChange={onUserIdChange}
            onBlur={onUserIdBlur}
          />
          {isUserIdNull && <div className="Warning">필수 정보입니다.</div>}
          {isUserIdLen && <div className="Warning">2~20자만 가능합니다.</div>}
          {isUserIdDup && (
            <div className="Warning">이미 사용중인 아이디입니다.</div>
          )}
          {isNotUserIdDup && (
            <div className="Warning">사용 가능한 아이디입니다.</div>
          )}
        </div>
        <div className="SignupUserPw">
          <label htmlFor="user-pw">비밀번호</label>
          <input
            placeholder="사용할 비밀번호를 입력하세요"
            name="user-pw"
            type="password"
            required
            minLength="4"
            maxLength="16"
            value={userPw}
            onChange={onUserPwChange}
            onBlur={onUserPwBlur}
          />
          {isUserPwNull && <div className="Warning">필수 정보입니다.</div>}
          {isUserPwLen && <div className="Warning">4~16자만 가능합니다.</div>}
          <label htmlFor="user-password-check">비밀번호 재확인</label>
          <input
            placeholder="비밀번호를 재입력하세요"
            name="user-password-check"
            type="password"
            required
            minLength="4"
            maxLength="16"
            value={userPwCheck}
            onChange={onUserPwCheckChange}
            onBlur={onPWCheckBlur}
          />
          {isUserPwCheckNull && <div className="Warning">필수 정보입니다.</div>}
          {passwordError && (
            <div className="Warning">비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <button className="SignupBtn" type="submit" onClick={onSignupClick}>
            회원가입
          </button>
        </div>
      </form>
      <Link to="/" className="toLoginBtn">
        로그인
      </Link>
    </div>
  );
}
