import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [isEmailNull, setIsEmailNull] = useState(false);
  // const [IsEmailOverlap, setIsEmailOverlap] = useState(false);

  const onEmailFocusOut = (e) => {
    setIsEmailNull(e.target.value === "");
    // if (e.target.value in 데이터베이스에 있는 아이디){
    //   setIsEmailOverlap(!IsEmailOverlap)
    // }
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onPWChange = (e) => {
    setPassword(e.target.value);
  };
  const onPWCheckBlur = (e) => {
    setPasswordError(e.target.value !== password);
  };

  return (
    <div className="SignupContainer">
      <h1 className="Signuptitle">회원가입</h1>
      <form className="SignupForm">
        <div className="SignupEmail">
          <label htmlFor="user-email">이메일</label>
          <input
            value={email}
            name="user-email"
            required
            placeholder="사용할 이메일을 입력하세요"
            onChange={onEmailChange}
            onBlur={onEmailFocusOut}
          />
          {isEmailNull && <div className="Warning">필수 정보입니다.</div>}
          {/* {isEmailOverlap && (
            <div className="Warning">이미 사용 중인 이메일입니다.</div>
          )} */}
        </div>
        <div className="SignupPassword">
          <label htmlFor="user-password">비밀번호</label>
          <input
            placeholder="사용할 비밀번호를 입력하세요"
            name="user-password"
            type="password"
            required
            value={password}
            onChange={onPWChange}
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
          <button className="SignupBtn" type="submit">
            가입하기
          </button>
        </div>
      </form>
      <Link to="/" className="toLoginBtn">
        로그인
      </Link>
    </div>
  );
}
