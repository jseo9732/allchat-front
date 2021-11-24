import { useState } from "react";
import { useHistory } from "react-router";
import GetChatContents from "../../components/ChatRoomComponents/GetChatContents";
import ChatInput from "../../components/ChatRoomComponents/ChatInput";
import ChatSideMenu from "../../components/ChatRoomComponents/ChatSideMenu";
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
            <i
              className="fas fa-chevron-left chatRoomImg"
              onClick={onBackClick}
            ></i>
          </div>
          <div className="chatRoomTitleContainer">
            <span className="chatRoomTitle">{title}</span>
            <span className="chatRoomNum">({participantCount})</span>
          </div>
          <div className="chatRoomImgContainer">
            {showSideMenu ? (
              <i
                className="fas fa-times chatRoomImg"
                onClick={onSideMenuClick}
              ></i>
            ) : (
              <i
                className="fas fa-bars chatRoomImg"
                onClick={onSideMenuClick}
              ></i>
            )}
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
