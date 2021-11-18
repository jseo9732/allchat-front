import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
// import Cookies from "universal-cookie";

export default function ChatSideMenu({
  showSideMenu,
  chatRoomId,
  userId,
  jwtToken,
  isMaster,
  joinData: { username },
  refreshAllList,
  refreshEnterList,
}) {
  // const cookies = new Cookies();
  const history = useHistory();

  const [enterUSers, setEnterUsers] = useState([]);
  const getEnterUser = (showSideMenu) => {
    if (showSideMenu) {
      axios(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}/joins`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: jwtToken,
          },
        }
      )
        .then((res) => {
          setEnterUsers(res.data.data);
        })
        .catch((err) => {
          if (err.response.data.error === "Unauthorized") {
            alert("로그인 후 다시 이용해주세요");
            // cookies.remove("jwtToken");
            // cookies.remove("userId");
          } else {
            console.log(err.response);
          }
        });
    }
  };

  // 채팅방 삭제
  const onChatRoomDel = async () => {
    if (window.confirm("채팅방을 삭제하시겠습니까?") === true) {
      await axios(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms/${chatRoomId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => {
          refreshAllList();
          refreshEnterList();
          history.push("/");
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
    }
  };
  const onChatRoomOut = async () => {
    if (window.confirm("채팅방을 나가시겠습니까?") === true) {
      await axios(
        `http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/joins`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: jwtToken,
          },
          data: {
            userId: userId,
            chatRoomId: chatRoomId,
          },
        }
      )
        .then((res) => {
          onOutSave();
          refreshAllList();
          refreshEnterList();
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // 퇴장 메세지 저장
  const onOutSave = async () => {
    await axios(
      "http://eballchatchatting-env.eba-gfegivem.ap-northeast-2.elasticbeanstalk.com/chats/notifications",
      {
        method: "POST",
        data: {
          participant: username,
          roomId: chatRoomId,
          join: false,
        },
      }
    )
      .then((res) => {
        console.log(res);
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

  const [enterUSers, setEnterUsers] = useState([]);
  useEffect(() => {
    getEnterUser(showSideMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSideMenu, chatRoomId]);

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
            {showSideMenu &&
              enterUSers.map((enterUSer) => {
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
