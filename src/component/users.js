import React, { Component } from 'react'
import Login from './login'

class users extends Component {
    render() {
        return (
            
                  <div>
                    {users.map((user) => {
                      return (
                        <Login
                          key={user.id}
                          id={user.id}
                          username={user.username}
                          password={user.password}
                        />
                      );
                    })}
                  </div>
          );
    }
}
export default users;