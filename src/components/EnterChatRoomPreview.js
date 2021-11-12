import "./ChatRoomPreview.css";
import { Link } from "react-router-dom";

export default function EnterChatRoomPreview({
  chatRoomId,
  masterId,
  participantCount,
  participantState,
  title,
  myToken,
}) {
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
    >
      <div className="chatNum">{participantCount}</div>
      <div className="chatTitle">{title}</div>
    </Link>
  );
}
