import { useState } from "react";
import { useHistory } from "react-router";
import "./AddChatRoomBtn.css";

export default function AddChatRoomBtn() {
  const history = useHistory();
  const [isOnMouseOver, setIsOnMouseOver] = useState(false);
  const onMouseOver = () => {
    setIsOnMouseOver(true);
  };
  const onMouseOut = () => {
    setIsOnMouseOver(false);
  };
  const onChatAddClick = () => {
    history.push("/addChatRoom");
  };
  return (
    <i
      className={
        isOnMouseOver
          ? "fas fa-comment-medical addChatIcon active"
          : "fas fa-comment-medical addChatIcon"
      }
      onClick={onChatAddClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    ></i>
  );
}
