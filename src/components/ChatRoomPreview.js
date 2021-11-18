import "./ChatRoomPreview.css";
import axios from "axios";
import { useHistory } from "react-router";
// import Cookies from "universal-cookie";

export default function ChatRoomPreview({
  chatRoomId,
  masterId,
  participantCount,
  participantState,
  title,
  userId,
  jwtToken,
}) {
  // const cookies = new Cookies();
  const history = useHistory();

  const joinChat = async () => {
    if (participantState === false) {
      await axios(
        "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/joins",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: jwtToken,
          },
          data: {
            userId: userId,
            chatRoomId: chatRoomId,
          },
        }
      )
        .then((res) => {
          history.push("/");
        })
        .catch((err) => {
          if (err.response.data.error === "Unauthorized") {
            alert("로그인 후 다시 이용해주세요");
            // cookies.remove("jwtToken");
            // cookies.remove("userId");
            // document.location.href = "/";
          } else {
            console.log(err.response);
          }
        });
    }
  };

  // const [chatData, setChatData] = useState([]);
  // const getChatMsg = async () => {
  //   await axios(
  //     `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins/time?userId=${userId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: jwtToken,
  //       },
  //     }
  //   ).then((res) => {
  //     setChatData(res.data.data);
  //   });
  // };

  return (
    <div className="chatContainer">
      <div className="chatNum">{participantCount}</div>
      <div className="chatTitle">{title}</div>
      {!participantState && (
        <button className="enterBtn" onClick={joinChat}>
          참여
        </button>
      )}
    </div>
  );
}
