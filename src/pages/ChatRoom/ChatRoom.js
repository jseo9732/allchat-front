import { useState } from "react";
import { useHistory } from "react-router";
import GetChatContents from "../../components/GetChatContents";
import ChatInput from "../../components/ChatInput";
import ChatSideMenu from "../../components/ChatSideMenu";
import "./ChatRoom.css";

export default function ChatRoom({
  location: {
    state: { chatRoomId, masterId, participantCount, title, userId, jwtToken },
    refreshAllList,
    refreshEnterList,
  },
}) {
  const history = useHistory();

  const onBackClick = () => {
    history.push("/");
    refreshAllList();
    refreshEnterList();
  };

  const [showSideMenu, setShowSideMenu] = useState(false);
  const onSideMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <>
      <div className="chatRoomContainer">
        <div className="chatRoomTopBar">
          <div className="chatRoomImgContainer">
            <img
              onClick={onBackClick}
              className="chatRoomImg"
              src="/image/chevron-left-solid.svg"
              alt="뒤로가기"
            />
          </div>
          <div className="chatRoomTitleContainer">
            <span className="chatRoomTitle">{title}</span>
            <span className="chatRoomNum">({participantCount})</span>
          </div>
          <div className="chatRoomImgContainer">
            <img
              onClick={onSideMenuClick}
              className="chatRoomImg"
              src="/image/bars-solid.svg"
              alt="채팅 메뉴"
            />
          </div>
        </div>
        <div className="sideMenuFlex">
          {showSideMenu && (
            <div onClick={onSideMenuClick} className="sideMenuBlank"></div>
          )}
          <GetChatContents
            chatRoomId={chatRoomId}
            userId={userId}
            jwtToken={jwtToken}
          />
          <ChatInput chatRoomId={chatRoomId} userId={userId} />
          <ChatSideMenu
            showSideMenu={showSideMenu}
            chatRoomId={chatRoomId}
            userId={userId}
            jwtToken={jwtToken}
            isMaster={masterId === Number(userId)}
            refreshAllList={refreshAllList}
            refreshEnterList={refreshEnterList}
          />
        </div>
      </div>
    </>
  );
}
