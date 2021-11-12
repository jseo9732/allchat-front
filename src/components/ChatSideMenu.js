import axios from "axios";
import { useHistory } from "react-router";

export default function ChatSideMenu({
  showSideMenu,
  enterUSers,
  userId,
  chatRoomId,
  myToken,
  isMaster,
}) {
  const history = useHistory();

  const onChatRoomDel = () => {
    axios(
      `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
      }
    )
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChatRoomOut = () => {
    axios(
      `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/joins`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
        data: {
          userId: userId,
          chatRoomId: chatRoomId,
        },
      }
    )
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className={
        showSideMenu ? "sideMenuContainer active" : "sideMenuContainer"
      }
    >
      <div className="sideMenu">
        <div className="chatMemberContainer">
          <div className="chatMemberTitle">대화 상대</div>
          <div className="chatMemberBox">
            {enterUSers.map((enterUSer) => {
              return (
                <div key={enterUSer.joinId} className="chatMember">
                  {enterUSer.username}
                </div>
              );
            })}
          </div>
        </div>
        <div className="btnBox">
          {isMaster ? (
            <button onClick={onChatRoomDel}>채팅방 삭제</button>
          ) : (
            <button onClick={onChatRoomOut}>나가기</button>
          )}
        </div>
      </div>
    </div>
  );
}
