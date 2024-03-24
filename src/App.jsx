import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { GlobalStyles } from "./Globals";
import data from "./data.json";
function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <GlobalStyles />
      <Header>
        <h2>Notifications {}</h2>
        <p onClick={()=>{
          const reset =notifications.map((message)=>{return{...message,isRead:true}})
        setNotifications(reset)
        }}>Mark all as read</p>
      </Header>
      <main>
        {notifications.map((notification) => {
          return (
            <div
              style={
                notification.isRead
                  ? { backgroundColor: " var(--9---White, #FFF)" }
                  : {}
              }
              key={notification.id}
              onClick={() => {
                const newNotifications = notifications.map((currentMessage) => {
               
                  if (notification.id === currentMessage.id) {
                    return {
                      ...currentMessage,
                      isRead:true,
                    };
                  }
                  return currentMessage;
                });
                setNotifications(newNotifications);
              }}
            >
              <img src={notification.profilePic} alt="" />
              <span>
                {notification.userName} {notification.action}{" "}
                {notification.groupName && (
                  <span>{notification.groupName}</span>
                )}
              </span>
              <p>{notification.time}</p>
              {notification.post && <span> {notification.post} </span>}
              {!notification.isRead && <img src="/images/Oval.svg" />}
              {notification.text && <p>{notification.text}</p>}
              {notification.userPicture && (
                <img src={notification.userPicture} alt="" />
              )}
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;

  align-items: center;
  gap: 5rem;
`;
