import { useHistory } from "react-router";
import "./AddChatRoom.css";
import axios from "axios";

export default function AddChatRoom({
  userObj,
  refreshAllList,
  refreshEnterList,
}) {
  const history = useHistory();

  const onBackClick = () => {
    refreshAllList();
    refreshEnterList();
    history.push("/");
  };

  const onaddRoomSubmit = async (e) => {
    e.preventDefault();
    axios(
      "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms",
      {
        method: "POST",
        data: {
          masterId: userObj.userId,
          title: e.target.chatRoomTitle.value,
        },
      }
    ).then(() => {
      refreshAllList();
      refreshEnterList();
      history.push("/");
    });
  };

  return (
    <>
      <div className="AddChatRoomContainer">
        <div className="AddChatRoomTopBar">
          <div className="AddChatRoomImgContainer">
            <i
              className="fas fa-chevron-left AddChatRoomImg"
              onClick={onBackClick}
            ></i>
          </div>
          <div className="AddChatRoomTitle">새로운 채팅</div>
        </div>
        <form className="AddChatRoomForm" onSubmit={onaddRoomSubmit}>
          <input
            name="chatRoomTitle"
            className="AddChatRoomInput"
            type="text"
            placeholder="방 이름을 입력하세요."
            required
          />
          <input className="AddChatRoomBtn" type="submit" value="만들기" />
        </form>
      </div>
    </>
  );
}
