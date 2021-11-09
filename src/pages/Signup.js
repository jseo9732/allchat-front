import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [userId, setUserId] = useState("");
  const [isUserIdNull, setIsUserIdNull] = useState(false);
  // const [isUserIdDup, setIsUserIdDup] = useState(false);

  const onUserIdFocusOut = (e) => {
    setIsUserIdNull(e.target.value === "");
    // if (e.target.value in 데이터베이스에 있는 아이디){
    //   setIsUserIdDup(!isUserIdDup)
    // }
  };
  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const [userPw, setUserPw] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onUserPwChange = (e) => {
    setUserPw(e.target.value);
  };
  const onPWCheckBlur = (e) => {
    setPasswordError(e.target.value !== userPw);
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
            placeholder="사용할 아이디를 입력하세요"
            onChange={onUserIdChange}
            onBlur={onUserIdFocusOut}
          />
          {isUserIdNull && <div className="Warning">필수 정보입니다.</div>}
          {/* {isEmailOverlap && (
            <div className="Warning">이미 사용 중인 이메일입니다.</div>
          )} */}
        </div>
        <div className="SignupUserPw">
          <label htmlFor="user-pw">비밀번호</label>
          <input
            placeholder="사용할 비밀번호를 입력하세요"
            name="user-pw"
            type="password"
            required
            value={userPw}
            onChange={onUserPwChange}
          />
          <label htmlFor="user-password-check">비밀번호 재확인</label>
          <input
            placeholder="비밀번호를 재입력하세요"
            name="user-password-check"
            type="password"
            required
            onBlur={onPWCheckBlur}
          />
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
