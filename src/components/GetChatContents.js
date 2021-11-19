import { useEffect, useState } from "react";
import axios from "axios";
import { EventSourcePolyfill } from "event-source-polyfill";

export default function GetChatContents({ chatRoomId, userId, jwtToken }) {
  const [joinData, setJoinData] = useState([]);
  const [eventSource, setEventSource] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins/time?userId=${userId}`
      )
      .then((res) => {
        setJoinData(res.data.data);
        setEventSource(
          new EventSourcePolyfill(
            `http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chatRooms/${chatRoomId}/chats?username=${res.data.data.username}&joinDateTime=${res.data.data.joinDateTime}`,
            {
              headers: {
                Authorization: jwtToken,
              },
            }
          )
        );
      });

    //SSE 연결하기
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

    eventSource.onopen = () => {
      console.log("Connection to server opened.");
    };
    eventSource.onerror = () => {
      console.log("EventSource failed.");
      eventSource.close();
    };

    return () => {
      eventSource.close();
      console.log("eventsource closed");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventSource]);

  // 입퇴장 알림 초기화하기
  const initNoti = (data) => {
    const chatBox = document.querySelector("#chat-box");

    const notiBox = document.createElement("div");
    notiBox.className = "NotiBox";
    notiBox.innerHTML = getNotiMsgBox(data);

    chatBox.appendChild(notiBox);
  };

  //파란박스 초기화하기
  const initsentMessage = (data) => {
    const chatBox = document.querySelector("#chat-box");

    const sentBox = document.createElement("div");
    sentBox.className = "sent_box";
    sentBox.innerHTML = getSentMsgBox(data);

    chatBox.appendChild(sentBox);

    //스크롤 따라가기
    document.documentElement.scrollTop = document.body.scrollHeight;
  };

  //회색박스 초기화하기
  const initReceivedMessage = (data) => {
    const chatBox = document.querySelector("#chat-box");

    const receivedBox = document.createElement("div");
    receivedBox.className = "received_box";
    receivedBox.innerHTML = getReceivedMsgBox(data);

    chatBox.appendChild(receivedBox);

    //스크롤 따라가기
    document.documentElement.scrollTop = document.body.scrollHeight;
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

  return (
    <div className="chatContents">
      <div id="chat-box"></div>
    </div>
  );
}
