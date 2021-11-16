import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Signup() {
  const history = useHistory();

  // 아이디 입력 창 관련
  const [userId, setUserId] = useState("");
  const [isUserIdNull, setIsUserIdNull] = useState(false);
  const [isUserIdLen, setIsUserIdLen] = useState(false);
  const [isUserIdDup, setIsUserIdDup] = useState(false);
  const [isNotUserIdDup, setIsNotUserIdDup] = useState(false);

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const onUserIdBlur = () => {
    setIsUserIdNull(userId === "");
    setIsUserIdLen(userId.length !== 0 && userId.length < 2);
    if (userId.length >= 2) {
      userIdDuplicate(userId);
    } else {
      setIsUserIdDup(false);
      setIsNotUserIdDup(false);
    }
  };

  const userIdDuplicate = async (userId) => {
    await axios(
      "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/auth/duplicate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: userId,
        },
      }
    )
      .then((res) => {
        setIsUserIdDup(!res.data.data);
        setIsNotUserIdDup(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // 비밀번호 입력 창 관련
  const [userPw, setUserPw] = useState("");
  const [isUserPwNull, setIsUserPwNull] = useState(false);
  const [isUserPwLen, setIsUserPwLen] = useState(false);

  const onUserPwChange = (e) => {
    setUserPw(e.target.value);
  };

  const onUserPwBlur = () => {
    setIsUserPwNull(userPw === "");
    setIsUserPwLen(userPw.length !== 0 && userPw.length < 4);
  };

  // 비밀번호 확인 입력 창 관련
  const [userPwCheck, setUserPwCheck] = useState("");
  const [isUserPwCheckNull, setIsUserPwCheckNull] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const onUserPwCheckChange = (e) => {
    setUserPwCheck(e.target.value);
  };

  const onPWCheckBlur = () => {
    setIsUserPwCheckNull(userPwCheck === "");
    setPasswordError(userPwCheck !== userPw);
    setPasswordSuccess(userPwCheck === userPw);
    if (userPwCheck === "") {
      setPasswordError(false);
      setPasswordSuccess(false);
    }
  };

  // 회원가입 버튼 클릭 시
  const onSignupClick = async (e) => {
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
      await axios(
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
          console.log(err.response);
        });
    }
  };

  return (
    <div className="SignupContainer">
      <h1 className="Signuptitle">회원가입</h1>
      <form className="SignupForm">
        <div className="SignupUserId">
          <label>아이디</label>
          <input
            type="text"
            placeholder="사용할 아이디를 입력하세요"
            required
            autoFocus
            value={userId}
            minLength="2"
            maxLength="20"
            onChange={onUserIdChange}
            onBlur={onUserIdBlur}
          />
          {isUserIdNull && <div className="Warning">필수 정보입니다.</div>}
          {isUserIdLen && <div className="Warning">2~20자만 가능합니다.</div>}
          {isUserIdDup && (
            <div className="Warning">이미 사용중인 아이디입니다.</div>
          )}
          {isNotUserIdDup && (
            <div className="Success">사용 가능한 아이디입니다.</div>
          )}
        </div>
        <div className="SignupUserPw">
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="사용할 비밀번호를 입력하세요"
            required
            value={userPw}
            minLength="4"
            maxLength="16"
            onChange={onUserPwChange}
            onBlur={onUserPwBlur}
          />
          {isUserPwNull && <div className="Warning">필수 정보입니다.</div>}
          {isUserPwLen && <div className="Warning">4~16자만 가능합니다.</div>}
          <label>비밀번호 재확인</label>
          <input
            type="password"
            placeholder="사용할 비밀번호를 재입력하세요"
            required
            value={userPwCheck}
            minLength="4"
            maxLength="16"
            onChange={onUserPwCheckChange}
            onBlur={onPWCheckBlur}
          />
          {isUserPwCheckNull && <div className="Warning">필수 정보입니다.</div>}
          {passwordError && (
            <div className="Warning">비밀번호가 일치하지 않습니다.</div>
          )}
          {passwordSuccess && (
            <div className="Success">비밀번호가 일치합니다.</div>
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
