import axios from "axios";
import { useEffect } from "react";
// import Cookies from "universal-cookie";

export default function KakaoLogin() {
  const code = new URL(window.location.href).searchParams.get("code");
  // const cookies = new Cookies();

  useEffect(() => {
    console.log(code);
    const getKakaoToken = async () => {
      await axios(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/login/kakao?code=${code}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
        .then((res) => {
          const accessToken = res.data.data;
          console.log(accessToken);
          axios.defaults.headers.common["Authorization"] = `${accessToken}`;
          //   const userId = res.data.data.userId;
          //   const accessToken = res.data.data.jwtToken;
          //   cookies.set("myToken", accessToken, {
          //     path: "/",
          //     maxAge: 60 * 60 * 24 * 30,
          //   });
          //   cookies.set("userId", userId, {
          //     path: "/",
          //     maxAge: 60 * 60 * 24 * 30,
          //   });
          //   document.location.href = "/";
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    getKakaoToken();
  }, [code]);

  return <div>로그인 중입니다.</div>;
}
