import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img 
          className="chatOnlineImg"
          src="https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg" 
          alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Jone Doe</span>
        </div>
        <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img 
          className="chatOnlineImg"
          src="https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg" 
          alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Jone Doe</span>
        </div>
    </div>
  )
}
