import "./ChatRoomPreview.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllChatRoomPreview({
  chatRoomId,
  masterId,
  participantCount,
  participantState,
  title,
  userId,
  myToken,
}) {
  const onChatRoomClick = () => {
    if (!participantState) {
      joinChat();
    }
  };
  const joinChat = async () => {
    axios(
      "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/joins",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
        data: {
          userId: userId,
          chatRoomId: chatRoomId,
        },
      }
    ).catch((err) => {
      console.log(err);
    });
  };

  return (
    <Link
      to={{
        pathname: `/chatRoom/${chatRoomId}`,
        state: {
          chatRoomId,
          masterId,
          participantCount,
          participantState,
          title,
          myToken,
        },
      }}
      className="chatContainer"
      onClick={onChatRoomClick}
    >
      <div className="chatNum">{participantCount}</div>
      <div className="chatTitle">{title}</div>
      {!participantState && <button className="enterBtn">참여</button>}
    </Link>
  );
}
