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

  const slide_L = () =>
    document.getElementById("slider").scrollBy({
      top: 0,
      left: -400,
      behavior: "smooth",
    });
  const slide_R = () =>
    document.getElementById("slider").scrollBy({
      top: 0,
      left: 400,
      behavior: "smooth",
    });
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
            className="addChatIcon"
            alt="chat_icon"
            src={src}
          />
        </div>
        <div id="slider" className="rowChatListContainer">
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
          <div className="toggleBtn" onClick={slide_L}>
            전체 목록
          </div>
          <div className="toggleBtn" onClick={slide_R}>
            참여중인 방
          </div>
        </div>
      </div>
    </>
  );
}
