import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";
// import Cookies from "universal-cookie";

export default function KakaoLogin({ refreshLogin }) {
  const code = new URL(window.location.href).searchParams.get("code");
  const history = useHistory();
  // const cookies = new Cookies();

  useEffect(() => {
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
          const userObj = res.data.data;
          refreshLogin(userObj);
          axios.defaults.headers.common[
            "Authorization"
          ] = `${userObj.jwtToken}`;
          history.replace("/");
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
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    getKakaoToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>카카오 로그인 중입니다.</div>;
}
