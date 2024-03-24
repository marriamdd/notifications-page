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
        <h2>Notifications 3</h2>
        <p>Mark all as read</p>
      </Header>
      <main>
        {notifications.map((notification) => {
          return (
            <div
              style={
                !notification.isUnread
                  ? { backgroundColor: "var(--8---Snow, #F7FAFD)" }
                  : {}
              }
              key={notification.id}
              onClick={()=>{
                const newNotifications=notifications.map((currentMessage)=>{
                if(notification.id===currentMessage.id){
                  return{...currentMessage,isUnread:!currentMessage.isUnread}
              }return currentMessage})
              setNotifications(newNotifications)
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
              {notification.isUnread && <img src="/images/Oval.svg" />}
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
