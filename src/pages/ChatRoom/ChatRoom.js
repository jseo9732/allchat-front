// import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import ChatSideMenu from "../../components/ChatSideMenu";
import "./ChatRoom.css";
import Cookies from "universal-cookie";
import GetChatContents from "../../components/GetChatContents";

export default function ChatRoom(props) {
  const cookies = new Cookies();
  const history = useHistory();
  const onBackClick = () => {
    history.push("/");
  };

  const { location } = props;
  const {
    chatRoomId,
    masterId,
    userId,
    participantCount,
    title,
    myToken,
    chatData,
  } = location.state;
  // console.log(chatData.data);
  if (location.state === undefined) {
    alert("채팅방이 삭제되었습니다.");
    history.push("/");
  }

  const [showSideMenu, setShowSideMenu] = useState(false);
  const onSideMenuClick = () => {
    setShowSideMenu(!showSideMenu);
    getEnterUser();
  };

  const [enterUSers, setEnterUsers] = useState([]);
  const getEnterUser = () => {
    if (!showSideMenu) {
      axios(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: myToken,
          },
        }
      )
        .then((res) => {
          setEnterUsers(res.data.data);
        })
        .catch((err) => {
          if (err.response.data.error === "Unauthorized") {
            alert("로그인 후 다시 이용해주세요");
            cookies.remove("myToken");
            cookies.remove("userId");
            document.location.href = "/";
          } else {
            console.log(err.response);
          }
        });
    }
  };

  const onSaveMsgSubmit = async (e) => {
    e.preventDefault();
    console.log(chatData);
    await axios(
      `http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chats`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
        data: {
          msg: e.target.chatValue.value,
          sender: chatData.username,
          roomId: chatRoomId,
        },
      }
    ).catch((err) => {
      console.log(err);
    });
  };

  return (
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
          chatData={chatData}
          myToken={myToken}
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
        </div>
        <ChatSideMenu
          showSideMenu={showSideMenu}
          enterUSers={enterUSers}
          userId={userId}
          chatRoomId={chatRoomId}
          myToken={myToken}
          isMaster={masterId === Number(userId)}
        />
      </div>
    </div>
  );
}
