import "./ChatRoomPreview.css";
import { useHistory } from "react-router-dom";

export default function ChatRoom() {
  const history = useHistory();
  const onclick = () => {
    history.push("/chatRoom");
  };
  return (
    <div className="chatContainer" onClick={onclick}>
      <div className="chatNum">3</div>
      <div className="chatTitle">들어오세요~</div>
    </div>
  );
}
