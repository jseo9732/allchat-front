import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./KakaoLogin.css";

export default function KakaoLogin({ refreshLogin }) {
  const code = new URL(window.location.href).searchParams.get("code");
  const history = useHistory();

  useEffect(() => {
    const getKakaoToken = async () => {
      await axios(`https://main.psblues.site/login/kakao?code=${code}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
        .then((res) => {
          const userObj = res.data.data;
          refreshLogin(userObj);
          axios.defaults.headers.common[
            "Authorization"
          ] = `${userObj.jwtToken}`;
          history.replace("/");
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    getKakaoToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="KakaoLoginContainer">
      <div className="KakaoLogin">카카오 로그인 중입니다.</div>
    </div>
  );
}
