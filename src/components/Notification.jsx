import React from "react";
import styled from "styled-components";
export default function Notification({ notifications, setNotifications }) {
  return (
    <main>
      {notifications.map((notification) => {
        return (
          <Div
            style={
              !notification.isRead
                ? { backgroundColor: " var(--8---Snow, #F7FAFD)" }
                : {}
            }
            key={notification.id}
            onClick={() => {
              const newNotifications = notifications.map((currentMessage) => {
                if (notification.id === currentMessage.id) {
                  return {
                    ...currentMessage,
                    isRead: true,
                  };
                }
                return currentMessage;
              });
              setNotifications(newNotifications);
            }}
          >
            <ProfilePic
              className="avatar"
              src={notification.profilePic}
              alt=""
            />
            <SpansContainer>
              <div>
                <SpanItem
                  style={{
                    fontWeight: "800",
                    color: " var(--3---Very-Dark-Grey-Blue, #1C202B)",
                  }}
                >
                  {notification.userName}
                </SpanItem>{" "}
                <SpanItem
                  style={{
                    fontWeight: " 500",
                    color: "var(--4---Dark-Grey-Blue, #5E6778)",
                  }}
                >
                  {notification.action}{" "}
                </SpanItem>
                <SpanItem
                 style={{
                  fontWeight: "500",
                  color: "var(--4---Dark-Grey-Blue, #5E6778)",
                }}
                >
                  {" "}
                  {notification.groupName && (
                    <SpanItem className="groupName"
                    style={{
                      color:" var(--1---Blue, #0A327B)",
                      fontWeight: "700",
                   

                    }}>{notification.groupName}</SpanItem>
                  )}
                </SpanItem>
                {notification.post && (
                  <SpanItem
                    style={{
                      fontWeight: "700",
                      color: "var(--4---Dark-Grey-Blue, #5E6778)",
                    }}
                  >
                    {" "}
                    {notification.post}{" "}
                  </SpanItem>
                )}
                {!notification.isRead && (
                  <SpanItem>
                    <img
                      style={{ width: "0.8rem", height: "0.8rem", marginLeft:".5rem" }}
                      src="/images/Oval.svg"
                    />
                  </SpanItem>
                )}
              
              
              </div>
              <Time>{notification.time}</Time>
              {notification.text && (
                  <NotificationText>
                    <p>{notification.text}</p>
                  </NotificationText>
                )}
                 
            </SpansContainer>
            {notification.userPicture && (
                  <img className="userImg"
                    style={{ width: "4.5rem", height: "4.5rem" }}
                    src={notification.userPicture}
                    alt=""
                  />
                )}{" "}
          </Div>
        );
      })}
    </main>
  );
}
const Div = styled.div`
  display: flex;

  min-width: 34.3rem;
  min-height: 8.9rem;
  flex-shrink: 0;
  background: var(--9---White, #fff);
  display: flex;
  border-radius: 8px;

  margin-top: 1rem;
  .userImg{
    margin-top: 1.2rem;
    cursor: pointer;
  }

`;

const ProfilePic = styled.img`
  min-width: 39px;
  height: 39px;
  margin-top: 1.8rem;
  margin-left: 1rem;

  border-radius: 39px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;
const SpansContainer = styled.div`
  padding: 1.6rem 2.6rem 1.6rem 1.8rem;
  max-width: 249px;
  flex-direction: column;
  justify-content: center;

  align-items: flex-start;


  display: flex;





  .groupName{
 cursor: pointer;
    white-space: nowrap;
  } 

`;

const SpanItem = styled.span`

font-size: 14px;

`;

const Time = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgb(147, 156, 173);
  margin-top: 3px;
`;

const NotificationText = styled.div`
  width: 263px;
  height: 122px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--7---Very-Light-Grey-Blue, #dde7ee);
  background: var(--9---White, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
margin-top: 1rem;
cursor: pointer;
  p {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 231px;
  } &:hover{
    border-radius: 5px;
border: 1px solid var(--7---Very-Light-Grey-Blue, #DDE7EE);
background: var(--6---Light-Grey-Blue, #E5EFFA);
  }
`;
