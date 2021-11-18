import { EventSourcePolyfill } from "event-source-polyfill";

export default function GetChatContents({
  chatRoomId,
  userId,
  jwtToken,
  joinData: { username, joinDateTime },
}) {
  const eventSource = new EventSourcePolyfill(
    `http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chatRooms/${chatRoomId}/chats?username=${username}&joinDateTime=${joinDateTime}`,
    {
      headers: {
        Authorization: jwtToken,
      },
    }
  );

  //SSE 연결하기
  eventSource.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.sender === username) {
      //파란박스(오른쪽)
      initsentMessage(data);
    } else {
      // 회색 박스(왼쪽)
      initReceivedMessage(data);
    }
  };

  //addMessage() 함수 호출시 DB에 insert되고, 그 데이터가 자동으로 흘러들어온다.(SSE)
  //파란박스 초기화하기
  function initsentMessage(data) {
    const chatBox = document.querySelector("#chat-box");

    const sentBox = document.createElement("div");
    sentBox.className = "sent_box";
    sentBox.innerHTML = getSentMsgBox(data);

    chatBox.append(sentBox);

    //스크롤 따라가기
    document.documentElement.scrollTop = document.body.scrollHeight;
  }

  //회색박스 초기화하기
  function initReceivedMessage(data) {
    const chatBox = document.querySelector("#chat-box");

    const receivedBox = document.createElement("div");
    receivedBox.className = "received_box";
    receivedBox.innerHTML = getReceivedMsgBox(data);

    chatBox.append(receivedBox);

    //스크롤 따라가기
    document.documentElement.scrollTop = document.body.scrollHeight;
  }

  //파란 박스 만들기
  function getSentMsgBox(data) {
    const sentDate = data.createDateTime.substring(5, 10);
    const sentTime = data.createDateTime.substring(11, 16);
    const convertTime = sentDate + " | " + sentTime;

    return `<div class="sent_msg">
              <p>${data.msg}</p>
              <span class="date_time">${convertTime}</span>
            </div>`;
  }

  //회색 박스 만들기
  function getReceivedMsgBox(data) {
    const ReceivedDate = data.createDateTime.substring(5, 10);
    const Receivedtime = data.createDateTime.substring(11, 16);
    const convertTime = ReceivedDate + " | " + Receivedtime;

    return `<div class="received_msg">
              <b>${data.sender}</b>
              <p>${data.msg}</p>
              <span class="date_time">${convertTime}</span>
            </div>`;
  }

  return (
    <div className="chatContents">
      <div id="chat-box"></div>
    </div>
  );
}
