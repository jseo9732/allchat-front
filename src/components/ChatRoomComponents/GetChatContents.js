import { useEffect } from "react";
import axios from "axios";
import { EventSourcePolyfill } from "event-source-polyfill";
import "./GetChatContents.css";

export default function GetChatContents({ chatRoomId, userId, jwtToken }) {
  let eventSource = undefined;

  const getJoinData = async () => {
    await axios
      .get(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins/time?userId=${userId}`
      )
      .then((res) => {
        getEventSource(res.data.data);
      });
  };

  const getEventSource = (joinData) => {
    eventSource = new EventSourcePolyfill(
      `http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chatRooms/${chatRoomId}/chats?username=${joinData.username}&joinDateTime=${joinData.joinDateTime}`,
      {
        headers: {
          Authorization: jwtToken,
        },
      }
    );
    showChat(eventSource, joinData);
  };

  const showChat = (eventSource, joinData) => {
    // SSE 연결하기
    eventSource.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.sender === null) {
        // 입퇴장알림
        initNoti(data);
      } else if (data.sender === joinData.username) {
        //파란박스(오른쪽)
        initsentMessage(data);
      } else {
        // 회색 박스(왼쪽)
        initReceivedMessage(data);
      }
    };
  };

  // 입퇴장 알림 초기화하기
  const initNoti = (data) => {
    const chatBox = document.querySelector("#chat-box");

    const notiBox = document.createElement("div");
    notiBox.className = "NotiBox";
    notiBox.innerHTML = getNotiMsgBox(data);

    chatBox.appendChild(notiBox);

    //스크롤 따라가기
    document.getElementById("chat-box").scrollTop =
      document.getElementById("chat-box").scrollHeight;
  };

  //파란박스 초기화하기
  const initsentMessage = (data) => {
    const chatBox = document.querySelector("#chat-box");

    const sentBox = document.createElement("div");
    sentBox.className = "sent_box";
    sentBox.innerHTML = getSentMsgBox(data);

    chatBox.appendChild(sentBox);

    //스크롤 따라가기
    document.getElementById("chat-box").scrollTop =
      document.getElementById("chat-box").scrollHeight;
  };

  //회색박스 초기화하기
  const initReceivedMessage = (data) => {
    const chatBox = document.querySelector("#chat-box");

    const receivedBox = document.createElement("div");
    receivedBox.className = "received_box";
    receivedBox.innerHTML = getReceivedMsgBox(data);

    chatBox.appendChild(receivedBox);

    //스크롤 따라가기
    document.getElementById("chat-box").scrollTop =
      document.getElementById("chat-box").scrollHeight;
  };

  //입퇴장 박스 만들기
  const getNotiMsgBox = (data) => {
    return `<p>${data.msg}</p>`;
  };

  //파란 박스 만들기
  const getSentMsgBox = (data) => {
    const sentDate = data.createDateTime.substring(5, 10);
    const sentTime = data.createDateTime.substring(11, 16);
    const convertTime = sentDate + " | " + sentTime;

    return `<div class="sent_msg">
              <p>${data.msg}</p>
              <span class="date_time">${convertTime}</span>
            </div>`;
  };

  //회색 박스 만들기
  const getReceivedMsgBox = (data) => {
    const ReceivedDate = data.createDateTime.substring(5, 10);
    const Receivedtime = data.createDateTime.substring(11, 16);
    const convertTime = ReceivedDate + " | " + Receivedtime;

    return `<div class="received_msg">
              <b>${data.sender}</b>
              <p>${data.msg}</p>
              <span class="date_time">${convertTime}</span>
            </div>`;
  };

  useEffect(() => {
    getJoinData();

    return () => {
      eventSource.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatRoomId]);

  return (
    <div className="chatContents">
      <div id="chat-box"></div>
    </div>
  );
}
