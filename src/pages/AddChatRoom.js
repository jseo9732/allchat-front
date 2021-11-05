import { useHistory } from "react-router";
import "./AddChatRoom.css";

export default function AddChatRoom() {
  const history = useHistory();
  const onBackClick = () => {
    history.push("/");
  };
  return (
    <div className="AddChatRoomContainer">
      <div className="AddChatRoomTopBar">
        <div className="AddChatRoomImgContainer">
          <img
            onClick={onBackClick}
            className="AddChatRoomImg"
            src="/image/chevron-left-solid.svg"
            alt="뒤로가기"
          />
        </div>
        <div className="AddChatRoomTitle">새로운 채팅</div>
      </div>
      <form className="AddChatRoomForm">
        <input
          className="AddChatRoomInput"
          type="text"
          placeholder="방 이름을 입력하세요."
        />
        <input className="AddChatRoomBtn" type="submit" value="만들기" />
      </form>
    </div>
  );
}
