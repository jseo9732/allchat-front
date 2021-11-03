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

  const onAllChatClick = () => {
    document.getElementById("slider").scrollBy({
      top: 0,
      left: -400,
      behavior: "smooth",
    });
  };
  const onEnterChatClick = () => {
    document.getElementById("slider").scrollBy({
      top: 0,
      left: 400,
      behavior: "smooth",
    });
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
          <div className="toggleBtn" onClick={onAllChatClick}>
            {/* <i className="fas fa-comment fa-2x"></i> */}
            <i className="far fa-comment fa-2x"></i>
            <div>전체 목록</div>
          </div>
          <div className="toggleBtn" onClick={onEnterChatClick}>
            <i className="far fa-comments fa-2x"></i>
            {/* <i className="fas fa-comments fa-2x"></i> */}
            <div>참여중인 방</div>
          </div>
        </div>
      </div>
    </>
  );
}
