// import { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import ChatSideMenu from "../../components/ChatSideMenu";
import "./ChatRoom.css";
// import Cookies from "universal-cookie";
// import GetChatContents from "../../components/GetChatContents";
import ChatList from "../../components/ChatList";

export default function ChatRoom(props) {
  const {
    chatRoomId,
    masterId,
    participantCount,
    title,
    userId,
    jwtToken,
    // chatData,
  } = props.location.state;
  const userObj = { userId, jwtToken };

  // const cookies = new Cookies();
  const history = useHistory();
  const onBackClick = () => {
    history.push("/");
  };

  // if (location.state === undefined) {
  //   alert("채팅방이 삭제되었습니다.");
  //   history.push("/");
  // }

  const [showSideMenu, setShowSideMenu] = useState(false);
  const onSideMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  // const onSaveMsgSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(chatData);
  //   await axios(
  //     `http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chats`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: jwtToken,
  //       },
  //       data: {
  //         msg: e.target.chatValue.value,
  //         sender: chatData.username,
  //         roomId: chatRoomId,
  //       },
  //     }
  //   ).catch((err) => {
  //     console.log(err);
  //   });
  // };

  return (
    <>
      <ChatList userObj={userObj} />
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
          {/* <GetChatContents
            chatRoomId={chatRoomId}
            userId={userId}
            chatData={chatData}
            jwtToken={jwtToken}
          />
          <div className="chatInputContainer">
            <form className="chatInputForm" onSubmit={onSaveMsgSubmit}>
              <textarea
                name="chatValue"
                id="chatValue"
                className="chatInput"
                type="text"
                autoFocus
              />
              <button id="submitBtn" className="inputBtn" type="submit">
                전송
              </button>
            </form>
          </div> */}
          <ChatSideMenu
            showSideMenu={showSideMenu}
            chatRoomId={chatRoomId}
            userId={userId}
            jwtToken={jwtToken}
            isMaster={masterId === Number(userId)}
          />
        </div>
      </div>
    </>
  );
}
