import React, { useState, useEffect } from "react";
import db from "../firebase";
import Chat from "./Chat";
import "../css/chats.css";


function Chats(props) {
    const username=props.username;
    const [messages,setMessages]=useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>(
            setMessages(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data: doc.data()
                }
            )))
        ));

        return () =>{
            unsubscribe();
        }
        
    }, [])

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="card__body">
            {messages.map((message) => (
              <Chat key={message.id} id={message.id} name={message.data.name} message={message.data.message} timestamp={message.data.timestamp} username={username}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
