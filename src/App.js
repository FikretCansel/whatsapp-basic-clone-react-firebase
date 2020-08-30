import React,{useState} from 'react';
import Chats from "./component/Chats"
import Navbar from "./component/Navbar"
import SendMessage from "./component/SendMessage"
import "./css/App.css"


function App() {
  const [username,setUsername]=useState("");
  const [input,setInput]=useState("");
  const [singIn,setsignIn]=useState(false);
 
  const singInfuc=(e)=>{
    e.preventDefault();
    if(input==="admin"){
      setsignIn(true); 
    } 
  }
  
  return (
    <div className="App">
      {!singIn? <div className="app__login">
        <form>
          <input type="text" className="form-control" value={username} placeholder="Adınızı giriniz!" onChange={(e) => setUsername(e.target.value)}/>
        <div className="form-group d-flex justify-content-between">
          <input type="text" className="form-control" value={input} placeholder="şifre:" onChange={(e) => setInput(e.target.value)}/>
          <button type="submit" className="btn btn-success" onClick={singInfuc}>Giriş</button>
        </div>
      </form></div>:
      <div className="col-md-6">
        <Navbar/>
        <Chats username={username}/>
        <SendMessage username={username}/>
        </div>
    
      
      }
     </div>


      
    
  );
}

export default App;
