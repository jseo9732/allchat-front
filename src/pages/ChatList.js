import { useState } from "react";
import { useHistory } from "react-router-dom";
import ChatRoom from "../components/ChatRoom";
import "./ChatList.css";

export default function ChatList() {
  const [src, setSrc] = useState("/image/chat_white.png");
  const onMouseOver = () => {
    setSrc("/image/chat_black.png");
  };
  const onMouseOut = () => {
    setSrc("/image/chat_white.png");
  };

  const history = useHistory();
  const onHomeClick = () => {
    history.push("/");
  };
  const onChatAddClick = () => {
    history.push("/addChat");
  };

  return (
    <>
      <div className="chatListContainer">
        <div className="TitleContainer">
          <h2 className="chatListTitle" onClick={onHomeClick}>
            채팅
          </h2>
          <img
            onClick={onChatAddClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            className="chatIcon"
            alt="chat_icon"
            src={src}
          />
        </div>
        <div className="rowChatListContainer">
          <div className="allchatList">
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
          </div>
          <div className="enterchatList">
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
          </div>
        </div>
        <div className="toggleBtnContainer">
          <div className="toggleBtn">전체 목록</div>
          <div className="toggleBtn">참여중인 방</div>
        </div>
      </div>
    </>
  );
}
