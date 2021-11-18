import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddChatRoomBtn from "./AddChatRoomBtn";
import ToggleBtn from "./ToggleBtn";
import ChatRoomPreview from "./ChatRoomPreview";
import "./ChatList.css";

// import Cookies from "universal-cookie";

export default function ChatList({ userObj: { userId, jwtToken } }) {
  // const cookies = new Cookies();

  // 채팅 목록 가져오기
  const [AllchatRoomsData, setAllChatRoomsData] = useState([]);
  const getAllChatRoomsList = async () => {
    await axios(
      `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms`,
      {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: jwtToken,
        // },
      }
    )
      .then((res) => {
        setAllChatRoomsData(res.data.data);
      })
      .catch((err) => {
        if (err.response.data.error === "Unauthorized") {
          alert("로그인 후 다시 이용해주세요");
          // cookies.remove("jwtToken");
          // cookies.remove("userId");
          // document.location.href = "/";
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
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: jwtToken,
        // },
      }
    )
      .then((res) => {
        setEnterChatRoomsData(res.data.data);
      })
      .catch((err) => {
        if (err.response.data.error === "Unauthorized") {
          alert("로그인 후 다시 이용해주세요");
          // cookies.remove("jwtToken");
          // cookies.remove("userId");
          // document.location.href = "/";
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
          <Link to="/" className="chatListTitle">
            채팅
          </Link>
          <AddChatRoomBtn />
        </div>
        <div id="slider" className="rowChatListContainer">
          <div className="allchatList">
            {AllchatRoomsData.map((chatRoom) => {
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
                />
              );
            })}
          </div>
          <div className="enterchatList">
            {EnterchatRoomsData.map((chatRoom) => {
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
                />
              );
            })}
          </div>
        </div>
        <ToggleBtn
          getAllChatRoomsList={getAllChatRoomsList}
          getEnterChatRoomsList={getEnterChatRoomsList}
        />
      </div>
    </>
  );
}
