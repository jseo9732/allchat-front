import { useEffect, useState } from "react";

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
  );
}
