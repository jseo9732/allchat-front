import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EnterChatRoomPreview from "../components/EnterChatRoomPreview";
import AllChatRoomPreview from "../components/AllChatRoomPreview";
import "./ChatList.css";

export default function ChatList() {
  const [addImgSrc, setaddImgSrc] = useState("/image/chat_white.png");
  const onMouseOver = () => {
    setaddImgSrc("/image/chat_black.png");
  };
  const onMouseOut = () => {
    setaddImgSrc("/image/chat_white.png");
  };

  const [btnImg, setbtnImg] = useState(false);
  const listener = () => {
    setbtnImg(document.getElementById("slider").scrollLeft > 200);
  };
  useEffect(() => {
    document.getElementById("slider").addEventListener("scroll", listener);
  }, []);

  const history = useHistory();
  const onHomeClick = () => {
    history.push("/");
  };
  const onChatAddClick = () => {
    history.push("/addChatRoom");
  };

  const onAllChatClick = () => {
    document.getElementById("slider").scrollBy({
      top: 0,
      left: -410,
      behavior: "smooth",
    });
  };
  const onEnterChatClick = () => {
    document.getElementById("slider").scrollBy({
      top: 0,
      left: 410,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="chatListContainer">
        <div className="TitleContainer">
          <h2 className="chatListTitle" onClick={onHomeClick}>
            채팅
          </h2>
          <img
            onClick={onChatAddClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            className="addChatIcon"
            alt="chat_icon"
            src={addImgSrc}
          />
        </div>
        <div id="slider" className="rowChatListContainer">
          <div className="allchatList">
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
            <AllChatRoomPreview />
          </div>
          <div className="enterchatList">
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
            <EnterChatRoomPreview />
          </div>
        </div>
        <div className="toggleBtnContainer">
          <div className="allChatBtn" onClick={onAllChatClick}>
            {btnImg ? (
              <img
                className="ChatBtnImg"
                src="/image/comment-regular.svg"
                alt="전체 채팅"
              />
            ) : (
              <img
                className="ChatBtnImg"
                src="/image/comment-solid.svg"
                alt="전체 채팅"
              />
            )}
            <div>전체 채팅</div>
          </div>
          <div className="enterChatBtn" onClick={onEnterChatClick}>
            {btnImg ? (
              <img
                className="ChatBtnImg"
                src="/image/comments-solid.svg"
                alt="참여 채팅"
              />
            ) : (
              <img
                className="ChatBtnImg"
                src="/image/comments-regular.svg"
                alt="참여 채팅"
              />
            )}

            <div>참여 채팅</div>
          </div>
        </div>
      </div>
    </>
  );
}
