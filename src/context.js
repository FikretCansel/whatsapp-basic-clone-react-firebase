import React, { Component } from "react";



const UserContext = React.createContext();
/*
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      return{
        ...state,
        users: state.users.map(user=>user.id=== action.payload.id ? action.payload:user)
      }
    default:
      return state;
  }
};
*/
export class UserProvider extends Component {
  //provider,consumer

  state = {
    users: [
      {
        username : "admin",
        password : "admin",
        id : "bKGMRe0"
      }
      
    ]
  };
  /*
  componentDidMount=async()=>{
    const response=await axios.get("http://localhost:3000/users");
    this.setState({
      users: response.data
    });
    console.log(response.data + "veri çekildi");
  }
*/
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
