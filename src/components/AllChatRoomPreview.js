import "./AllChatRoomPreview.css";
import { useHistory } from "react-router-dom";

export default function AllChatRoomPreview() {
  const history = useHistory();
  const onclick = () => {
    history.push("/chatRoom");
  };
  return (
    <div className="chatContainer" onClick={onclick}>
      <div className="chatNum">3</div>
      <div className="chatTitle">들어오세요~</div>
      <button className="enterBtn">참여</button>
    </div>
  );
}
