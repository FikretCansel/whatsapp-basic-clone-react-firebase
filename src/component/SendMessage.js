import React,{useState} from 'react'
import db from "../firebase"


function SendMessage(props) {
    const username=props.username;

    const [input, setInput] = useState("");
    
    

    const sendMessage = async(e) => {
        e.preventDefault();
        await db.collection("messages").add({
            name:username,
            message: input,
            timestamp: new Date().toUTCString()
          });
        setInput("");
      };
        
        
       
      

    return (
        <div className="form-group ">
        <form className="d-flex justify-content-between">
          <input
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Mesaj yaz :)))"
          />
          <button onClick={sendMessage} type="submit" className="btn btn-success">
            Gönder
          </button>
        </form>
        </div>
    )
}

export default SendMessage
