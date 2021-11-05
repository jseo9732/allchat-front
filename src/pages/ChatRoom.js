import { useHistory } from "react-router";
import "./ChatRoom.css";

export default function ChatRoom() {
  const history = useHistory();
  const onBackClick = () => {
    history.push("/");
  };

  return (
    <div className="chatRoomContainer">
      <div className="chatRoomTopBar">
        <div className="chatRoomBackContainer">
          <img
            onClick={onBackClick}
            className="chatRoomImg"
            src="/image/chevron-left-solid.svg"
            alt="뒤로가기"
          />
        </div>
        <div className="chatRoomTitleContainer">
          <span className="chatRoomTitle">들어오세요~</span>
          <span className="chatRoomNum">(3)</span>
        </div>

        <div className="chatRoomMenu">
          <img
            className="chatRoomImg"
            src="/image/bars-solid.svg"
            alt="채팅 메뉴"
          />
        </div>
      </div>
      <div className="chatContents"></div>
      <div className="chatInputContainer">
        <form className="chatInputForm">
          <textarea className="chatInput" type="text" />
          <button className="inputBtn" type="submit">
            전송
          </button>
        </form>
      </div>
    </div>
  );
}
