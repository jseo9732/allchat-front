// import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import ChatSideMenu from "../components/ChatSideMenu";
import "./ChatRoom.css";
import Cookies from "universal-cookie";

export default function ChatRoom(props) {
  const cookies = new Cookies();
  const history = useHistory();
  const onBackClick = () => {
    history.push("/");
  };

  const { location } = props;
  const { chatRoomId, masterId, userId, participantCount, title, myToken } =
    location.state;
  if (location.state === undefined) {
    alert("채팅방이 삭제되었습니다.");
    history.push("/");
  }
  // const eventSource = new EventSource(
  //   `http://localhost:9300/chat/roomNum/${roomNum}`
  // );

  // //SSE 연결하기
  // eventSource.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   if (data.sender === username) {
  //     //파란박스(오른쪽)
  //     initsentMessage(data);
  //   } else {
  //     // 회색 박스(왼쪽)
  //     initReceivedMsgBox(data);
  //   }
  // };

  // //addMessage() 함수 호출시 DB에 insert되고, 그 데이터가 자동으로 흘러들어온다.(SSE)
  // //파란박스 초기화하기
  // function initsentMessage(data) {
  //   const chatBox = document.querySelector("#chat-box");

  //   const sentBox = document.createElement("div");
  //   sentBox.className = "sent_box";
  //   sentBox.innerHTML = getSentMsgBox(data);

  //   chatBox.append(sentBox);

  //   //스크롤 따라가기
  //   document.documentElement.scrollTop = document.body.scrollHeight;
  // }

  // //회색박스 초기화하기
  // function initReceivedMsgBox(data) {
  //   const chatBox = document.querySelector("#chat-box");

  //   const receivedBox = document.createElement("div");
  //   receivedBox.className = "received_box";
  //   receivedBox.innerHTML = getReceivedMsgBox(data);

  //   chatBox.append(receivedBox);

  //   //스크롤 따라가기
  //   document.documentElement.scrollTop = document.body.scrollHeight;
  // }

  // //파란 박스 만들기
  // function getSentMsgBox(data) {
  //   const sentDate = data.createdAt.substring(5, 10);
  //   const sentTime = data.createdAt.substring(11, 16);
  //   const convertTime = sentDate + " | " + sentTime;

  //   return `<div className="sent_msg">
  //       <p>${data.msg}</p>
  //       <span className="date_time">${convertTime}</span>
  //     </div>`;
  // }

  // //회색 박스 만들기
  // function getReceivedMsgBox(data) {
  //   const ReceivedDate = data.createdAt.substring(5, 10);
  //   const Receivedtime = data.createdAt.substring(11, 16);
  //   const convertTime = ReceivedDate + " | " + Receivedtime;

  //   return `<div className="received_msg">
  //       <b>${data.sender}</b>
  //       <p>${data.msg}</p>
  //       <span className="date_time">${convertTime}</span>
  //     </div>`;
  // }

  // //AJAX 채팅 메시지를 전송
  // //async - 비동기함수로 지정
  // async function addMessage() {
  //   const msginput = document.querySelector("#chatValue");

  //   const chat = {
  //     sender: username,
  //     roomNum: roomNum,
  //     msg: msginput.value,
  //   };

  //   //await response가 올 때까지 기다려.
  //   await fetch("", {
  //     method: "post",
  //     body: JSON.stringify(chat), //JS -> JSON
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //   });

  //   msginput.value = "";
  // }
  // useEffect(() => {
  //   //버튼 클릭시 메시지 전송
  //   document.querySelector("#submitBtn").addEventListener("click", () => {
  //     addMessage();
  //   });

  //   //엔터를 치면 메시지 전송
  //   document.querySelector("#chatValue").addEventListener("keydown", (e) => {
  //     if (e.keyCode === 13) {
  //       addMessage();
  //     }
  //   });
  // });
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

        <div className="chatContents">
          <div id="chat-box">
            {/* <div className="sent_box">
              <div className="sent_msg">
                <p>내가 보낸 첫 문자</p>
                <span className="date_time">11:05 | 10:51</span>
              </div>
            </div>
            <div className="sent_box">
              <div className="sent_msg">
                <p>내가 보낸 두번째 문자222222</p>
                <span className="date_time">11:05 | 10:52</span>
              </div>
            </div>
            <div className="received_box">
              <div className="received_msg">
                <b>형우</b>
                <p>형우가 보낸 첫 번째 채팅</p>
                <span className="date_time">11:05 | 10:53</span>
              </div>
            </div>
            <div className="received_box">
              <div className="received_msg">
                <b>형우</b>
                <p>형우가 보낸 두 번째 채팅222</p>
                <span className="date_time">11:05 | 10:53</span>
              </div>
            </div>
            <div className="sent_box">
              <div className="sent_msg">
                <p>
                  내가 보낸 세 번째 문자
                  길게~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
                <span className="date_time">11:05 | 10:52</span>
              </div>
            </div>
            <div className="received_box">
              <div className="received_msg">
                <b>형우</b>
                <p>
                  형우가 보낸 세 번째
                  채팅~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
                <span className="date_time">11:05 | 10:53</span>
              </div>
            </div>
            <div className="NotiBox">
              <p>정수님이 퇴장하였습니다.</p>
            </div>
            <div className="received_box">
              <div className="received_msg">
                <b>형우</b>
                <p>
                  형우가 보낸 세 번째
                  채팅~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
                <span className="date_time">11:05 | 10:53</span>
              </div>
            </div>
            <div className="received_box">
              <div className="received_msg">
                <b>형우</b>
                <p>
                  형우가 보낸 세 번째
                  채팅~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
                <span className="date_time">11:05 | 10:53</span>
              </div>
            </div>
            <div className="NotiBox">
              <p>정수님이 입장하였습니다.</p>
            </div>
            <div className="received_box">
              <div className="received_msg">
                <b>정수</b>
                <p>
                  정수가 보낸 첫 번째
                  채팅~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
                <span className="date_time">11:05 | 10:59</span>
              </div>
            </div>
            <div className="NotiBox">
              <p>정수님이 퇴장하였습니다.</p>
            </div> */}
          </div>
        </div>
        <div className="chatInputContainer">
          <form className="chatInputForm">
            <textarea
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
