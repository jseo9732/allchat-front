import axios from "axios";
import { useEffect, useState } from "react";
import "./ChatInput.css";

export default function ChatInput({ chatRoomId, userId }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // 채팅 메세지 저장
  const onSaveMsgSubmit = async (e) => {
    e.preventDefault();
    await axios(
      `http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chats`,
      {
        method: "POST",
        data: {
          msg: inputValue,
          sender: joinData.username,
          roomId: chatRoomId,
        },
      }
    )
      .then((res) => {
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEnterKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSaveMsgSubmit(e);
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatRoomId]);

  return (
    <div className="chatInputContainer">
      <form className="chatInputForm" onSubmit={onSaveMsgSubmit}>
        <textarea
          name="chatValue"
          id="chatValue"
          className="chatInput"
          type="text"
          autoFocus
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onEnterKeyDown}
        />
        <button id="submitBtn" className="inputBtn" type="submit">
          전송
        </button>
      </form>
    </div>
  );
}
