import "./ChatRoomPreview.css";
import { Link } from "react-router-dom";

export default function AllChatRoomPreview({
  chatRoomId,
  masterId,
  participantCount,
  participantState,
  title,
}) {
  return (
    <Link
      to={{
        pathname: `/chatRoom/${chatRoomId}`,
        state: {
          masterId,
          participantCount,
          participantState,
          title,
        },
      }}
      className="chatContainer"
    >
      <div className="chatNum">{participantCount}</div>
      <div className="chatTitle">{title}</div>
      {!participantState && <button className="enterBtn">참여</button>}
    </Link>
  );
}
