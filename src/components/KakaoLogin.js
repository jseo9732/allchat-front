import axios from "axios";
import { useEffect } from "react";
import Cookies from "universal-cookie";

export default function KakaoLogin() {
  const kakaoApi = `https://kauth.kakao.com/oauth/authorize?client_id=3e716bc2780a7b5fe1da319c4487c6f9&redirect_uri=http://localhost:3000/&response_type=code`;
  const code = new URL(window.location.href).searchParams.get("code");
  const cookies = new Cookies();

  const getKakaoToken = async () => {
    try {
      axios(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/login/kakao?code=${code}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      ).then((res) => {
        const userId = res.data.data.userId;
        const accessToken = res.data.data.jwtToken;
        cookies.set("myToken", accessToken, {
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
        });
        cookies.set("userId", userId, {
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
        });
        document.location.href = "/";
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      getKakaoToken();
    }
  });

  return (
    <a className="kakaoLoginBtn" href={kakaoApi}>
      <img alt="카카오 로그인" src="/image/kakao_login_medium_wide.png" />
    </a>
  );
}
