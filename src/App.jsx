import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { GlobalStyles } from "./Globals";
import data from "./data.json";
import Notification from "./components/Notification";
function App() {
  const [notifications, setNotifications] = useState(data);
const notificationCounter=notifications.filter((notification)=>!notification.isRead).length

  return (
    <>
      <GlobalStyles />
      <Header>
        <h2>Notifications {notificationCounter}</h2>
        <p style={{cursor:"pointer"}} onClick={()=>{
          const reset =notifications.map((message)=>{return{...message,isRead:true}})
        setNotifications(reset)
        }}>Mark all as read</p>
      </Header>
    <Notification notifications={notifications} setNotifications={setNotifications} />
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;

  align-items: center;
  gap: 5rem;
`;
