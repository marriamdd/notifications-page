import React from 'react'

export default function Notification({notifications,setNotifications}) {
  return (
    <main style={{cursor:"pointer"}}>
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
  )
}
