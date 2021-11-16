import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EnterChatRoomPreview from "../../components/EnterChatRoomPreview";
import AllChatRoomPreview from "../../components/AllChatRoomPreview";
import "./ChatList.css";
import axios from "axios";
import Cookies from "universal-cookie";

export default function ChatList({ userId, myToken }) {
  const cookies = new Cookies();
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
    getAllChatRoomsList();
    document.getElementById("slider").scrollBy({
      top: 0,
      left: -410,
      behavior: "smooth",
    });
  };
  const onEnterChatClick = () => {
    getEnterChatRoomsList();
    document.getElementById("slider").scrollBy({
      top: 0,
      left: 410,
      behavior: "smooth",
    });
  };

  const [AllchatRoomsData, setAllChatRoomsData] = useState([]);
  const getAllChatRoomsList = async () => {
    await axios(
      `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
      }
    )
      .then((res) => {
        setAllChatRoomsData(res.data.data);
      })
      .catch((err) => {
        if (err.response.data.error === "Unauthorized") {
          alert("로그인 후 다시 이용해주세요");
          cookies.remove("myToken");
          cookies.remove("userId");
          document.location.href = "/";
        } else {
          console.log(err.response);
        }
      });
  };

  const [EnterchatRoomsData, setEnterChatRoomsData] = useState([]);
  const getEnterChatRoomsList = async () => {
    await axios(
      `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/participating`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
      }
    )
      .then((res) => {
        setEnterChatRoomsData(res.data.data);
      })
      .catch((err) => {
        if (err.response.data.error === "Unauthorized") {
          alert("로그인 후 다시 이용해주세요");
          cookies.remove("myToken");
          cookies.remove("userId");
          document.location.href = "/";
        } else {
          console.log(err.response);
        }
      });
  };

  useEffect(() => {
    getAllChatRoomsList();
    getEnterChatRoomsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {AllchatRoomsData.map((chatRoom) => {
              return (
                <AllChatRoomPreview
                  key={chatRoom.chatRoomId}
                  chatRoomId={chatRoom.chatRoomId}
                  masterId={chatRoom.masterId}
                  participantCount={chatRoom.participantCount}
                  participantState={chatRoom.participantState}
                  title={chatRoom.title}
                  userId={userId}
                  myToken={myToken}
                />
              );
            })}
          </div>
          <div className="enterchatList">
            {EnterchatRoomsData.map((chatRoom) => {
              return (
                <EnterChatRoomPreview
                  key={chatRoom.chatRoomId}
                  chatRoomId={chatRoom.chatRoomId}
                  masterId={chatRoom.masterId}
                  participantCount={chatRoom.participantCount}
                  participantState={chatRoom.participantState}
                  title={chatRoom.title}
                  userId={userId}
                  myToken={myToken}
                />
              );
            })}
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
