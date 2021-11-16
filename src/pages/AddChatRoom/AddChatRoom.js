import { useHistory } from "react-router";
import "./AddChatRoom.css";
import axios from "axios";
// import Cookies from "universal-cookie";

export default function AddChatRoom({ userObj: { userId, jwtToken } }) {
  const history = useHistory();
  // const cookies = new Cookies();
  const onBackClick = () => {
    history.push("/");
    // 채팅 목록 새로고침 하기
  };

  const onaddRoomSubmit = async (e) => {
    e.preventDefault();
    axios(
      "http://eballchatmain-env.eba-ky3tiuhm.ap-northeast-2.elasticbeanstalk.com/chatrooms",
      {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: jwtToken,
        // },
        data: {
          masterId: userId,
          title: e.target.chatRoomTitle.value,
        },
      }
    )
      .then((res) => {
        history.push("/");
        // 채팅 목록 새로고침 하기
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

  return (
    <div className="AddChatRoomContainer">
      <div className="AddChatRoomTopBar">
        <div className="AddChatRoomImgContainer">
          <img
            onClick={onBackClick}
            className="AddChatRoomImg"
            src="/image/chevron-left-solid.svg"
            alt="뒤로가기"
          />
        </div>
        <div className="AddChatRoomTitle">새로운 채팅</div>
      </div>
      <form className="AddChatRoomForm" onSubmit={onaddRoomSubmit}>
        <input
          name="chatRoomTitle"
          className="AddChatRoomInput"
          type="text"
          placeholder="방 이름을 입력하세요."
          required
        />
        <input className="AddChatRoomBtn" type="submit" value="만들기" />
      </form>
    </div>
  );
}
