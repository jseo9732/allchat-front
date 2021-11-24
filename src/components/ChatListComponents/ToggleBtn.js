import { useEffect, useState } from "react";
import "./ToggleBtn.css";

export default function ToggleBtn({ refreshAllList, refreshEnterList }) {
  const [btnImg, setbtnImg] = useState(false);

  const listener = () => {
    setbtnImg(document.getElementById("slider").scrollLeft > 200);
  };
  useEffect(() => {
    document.getElementById("slider").addEventListener("scroll", listener);
  }, []);

  const onAllChatClick = () => {
    refreshAllList();
    document.getElementById("slider").scrollBy({
      top: 0,
      left: -410,
      behavior: "smooth",
    });
  };
  const onEnterChatClick = () => {
    refreshEnterList();
    document.getElementById("slider").scrollBy({
      top: 0,
      left: 410,
      behavior: "smooth",
    });
  };

  return (
    <div className="toggleBtnContainer">
      <div className="allChatBtn" onClick={onAllChatClick}>
        {btnImg ? (
          <i className="far fa-comment ChatBtnImg"></i>
        ) : (
          <i className="fas fa-comment ChatBtnImg"></i>
        )}
        <div>전체 채팅</div>
      </div>
      <div className="enterChatBtn" onClick={onEnterChatClick}>
        {btnImg ? (
          <i className="fas fa-comments ChatBtnImg"></i>
        ) : (
          <i className="far fa-comments ChatBtnImg"></i>
        )}
        <div>참여 채팅</div>
      </div>
    </div>
  );
}
