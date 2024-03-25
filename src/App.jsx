import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { GlobalStyles } from "./Globals";
import data from "./data.json";
import Notification from "./components/Notification";
function App() {
  const [notifications, setNotifications] = useState(data);
  const notificationCounter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <>
      <GlobalStyles />
      <Header>
        <h2>
          Notifications{" "}
          <div className="notificationCounter">
            <span>{notificationCounter}</span>
          </div>{" "}
        </h2>
        <p
         
          onClick={() => {
            const reset = notifications.map((message) => {
              return {...message, isRead: true };
            });
            setNotifications(reset);
          }}
        >
          Mark all as read
        </p>
      </Header>
      <Notification
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </>
  );
}

export default App;

const Header = styled.header`
 display: flex;



flex-wrap: nowrap;
display: flex;
  flex-wrap: nowrap;
  padding: 2.8rem 1.6rem;
  background-color: var(--9---White, #fff);
  height: 2.5rem;
  width: 34.3rem;
  justify-content: center;
  align-items: center;
  gap: 7.4rem;

  & > p {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    text-align: center;
    display: inline;
    font-family: "Plus Jakarta Sans";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap; 
  }
  & > h2 {
    color: var(--3---Very-Dark-Grey-Blue, #1c202b);
    font-size: 2rem;
    font-weight: 800;
    display: flex;
    gap:0.3rem
    
  }
  h2 span {
    color: var(--9---White, #fff);

 
    font-size: 1.6rem;
   
    font-weight: 800;
   
  }
  .notificationCounter {
    width: 32px;
    height: 25px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--1---Blue, #0a327b);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
