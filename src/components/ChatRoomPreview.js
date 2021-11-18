import "./ChatRoomPreview.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import Cookies from "universal-cookie";

export default function ChatRoomPreview({
  chatRoomId,
  masterId,
  participantCount,
  participantState,
  title,
  userId,
  jwtToken,
  refreshAllList,
  refreshEnterList,
}) {
  // const cookies = new Cookies();

  // 1. 채팅 참여 요청
  const joinChat = async () => {
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
        refreshAllList();
        refreshEnterList();
        // 2. 채팅방 입장 시간 조회
        axios
          .get(
            `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins/time?userId=${userId}`
          )
          .then((res) => {
            onJoinSave(res.data.data.username);
          });
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
  };

  // 3. 참여 메세지 저장
  const onJoinSave = async (username) => {
    await axios(
      "http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chats/notifications",
      {
        method: "POST",
        data: {
          participant: username,
          roomId: chatRoomId,
          join: true,
        },
      }
    ).catch((err) => {
      if (err.response.data.error === "Unauthorized") {
        alert("로그인 후 다시 이용해주세요");
        // cookies.remove("jwtToken");
        // cookies.remove("userId");
        // document.location.href = "/";
      } else {
        console.log(err.response);
      }
    });
  };

  return (
    <Link
      to={
        participantState
          ? {
              pathname: `/chatRoom/${chatRoomId}`,
              state: {
                chatRoomId,
                masterId,
                participantCount,
                title,
                userId,
                jwtToken,
              },
              refreshAllList,
              refreshEnterList,
            }
          : ""
      }
      className="chatContainer"
    >
      <div className="chatNum">{participantCount}</div>
      <div className="chatTitle">{title}</div>
      {!participantState && (
        <button className="enterBtn" onClick={joinChat}>
          참여
        </button>
      )}
    </Link>
  );
}
