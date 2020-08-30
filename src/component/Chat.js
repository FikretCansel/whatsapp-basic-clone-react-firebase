import React from "react";

function chat(props) {
    const {name,message,timestamp,username}=props;
  return (
    <div className="chat__conteiner">
      <form>
        <p className={`chat__message ${name===username && "chat__reciever"}`}>
  <span className="chat__name">{name}</span>
          {message}
  <span className="chat__timestamp">{new Date(timestamp).toUTCString()}</span>
        </p>
      </form>
    </div>
  );
}

export default chat;
