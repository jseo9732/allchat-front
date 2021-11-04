import "./ChatRoom.css";

export default function ChatRoom() {
  return (
    <div className="chatRoomContainer">
      <div className="chatRoomTopBar">
        <div className="chatRoomBack">뒤로가기</div>
        <div className="chatRoomTitleContainer">
          <span className="chatRoomTitle">들어오세요~</span>
          <span className="chatRoomNum">3</span>
        </div>

        <div className="chatRoomMenu">햄버거</div>
      </div>
      <div className="chatContents"></div>
      <div className="chatInputContainer">
        <form>
          <input className="chatInput" type="text" />
          <button className="inputBtn" type="submit">
            전송
          </button>
        </form>
      </div>
    </div>
  );
}
