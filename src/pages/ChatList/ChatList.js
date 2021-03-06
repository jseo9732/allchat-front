import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";
import AddChatRoomBtn from "../../components/ChatListComponents/AddChatRoomBtn";
import ChatRoomPreview from "../../components/ChatListComponents/ChatRoomPreview";
import ToggleBtn from "../../components/ChatListComponents/ToggleBtn";

export default function ChatList({
  userObj: { userId, jwtToken },
  allList,
  refreshAllList,
  enterList,
  refreshEnterList,
}) {
  useEffect(() => {
    refreshAllList();
    refreshEnterList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="chatListContainer">
        <div className="TitleContainer">
          <Link
            to="/"
            className="chatListTitle"
            onClick={() => {
              refreshAllList();
              refreshEnterList();
            }}
          >
            채팅
          </Link>
          <AddChatRoomBtn />
        </div>
        <div id="slider" className="rowChatListContainer">
          <div className="allchatList">
            {allList.map((chatRoom) => {
              return (
                <ChatRoomPreview
                  key={chatRoom.chatRoomId}
                  chatRoomId={chatRoom.chatRoomId}
                  masterId={chatRoom.masterId}
                  participantCount={chatRoom.participantCount}
                  participantState={chatRoom.participantState}
                  title={chatRoom.title}
                  userId={userId}
                  jwtToken={jwtToken}
                  refreshAllList={refreshAllList}
                  refreshEnterList={refreshEnterList}
                />
              );
            })}
          </div>
          <div className="enterchatList">
            {enterList.map((chatRoom) => {
              return (
                <ChatRoomPreview
                  key={chatRoom.chatRoomId}
                  chatRoomId={chatRoom.chatRoomId}
                  masterId={chatRoom.masterId}
                  participantCount={chatRoom.participantCount}
                  participantState={chatRoom.participantState}
                  title={chatRoom.title}
                  userId={userId}
                  jwtToken={jwtToken}
                  refreshAllList={refreshAllList}
                  refreshEnterList={refreshEnterList}
                />
              );
            })}
          </div>
        </div>
        <ToggleBtn
          refreshAllList={refreshAllList}
          refreshEnterList={refreshEnterList}
        />
      </div>
    </>
  );
}
