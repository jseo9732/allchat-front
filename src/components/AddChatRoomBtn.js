import { useState } from "react";
import { useHistory } from "react-router";
import "./AddChatRoomBtn.css";

export default function AddChatRoomBtn() {
  const history = useHistory();
  const [addImgSrc, setaddImgSrc] = useState("/image/chat_white.png");
  const onMouseOver = () => {
    setaddImgSrc("/image/chat_black.png");
  };
  const onMouseOut = () => {
    setaddImgSrc("/image/chat_white.png");
  };
  const onChatAddClick = () => {
    history.push("/addChatRoom");
  };
  return (
    <img
      onClick={onChatAddClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="addChatIcon"
      alt="chat_icon"
      src={addImgSrc}
    />
  );
}
