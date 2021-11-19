import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import GetChatContents from "../../components/GetChatContents";
import ChatSideMenu from "../../components/ChatSideMenu";
import "./ChatRoom.css";

export default function ChatRoom({
  location: { state, refreshAllList, refreshEnterList },
}) {
  const { chatRoomId, masterId, participantCount, title, userId, jwtToken } =
    state;
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


  const [joinData, setJoinData] = useState([]);
  useEffect(() => {
    // 채팅방 입장 시간 조회
    axios
      .get(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins/time?userId=${userId}`
      )
      .then((res) => {
        setJoinData(res.data.data);
      });
    setShowSideMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatRoomId]);

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
            joinData={joinData}
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
