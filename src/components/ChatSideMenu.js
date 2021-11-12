export default function ChatSideMenu({ showSideMenu, enterUSers, isMaster }) {
  console.log(isMaster);
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
            {enterUSers.map((enterUSer) => {
              return (
                <div key={enterUSer.joinId} className="chatMember">
                  {enterUSer.username}
                </div>
              );
            })}
          </div>
        </div>
        <div className="btnBox">
          {isMaster ? <button>채팅방 삭제</button> : <button>나가기</button>}
        </div>
      </div>
    </div>
  );
}
