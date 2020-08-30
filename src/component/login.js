import React, { Component } from 'react'


 class login extends Component {
    
    changeInput = (e) =>{
        this.setState({
          [e.target.name] : e.target.value
        });
    }
    state={
      namestate: "",
      passwordstate: ""
    }
    render() {
        const {namestate,passwordstate}=this.state;
        const {id,username,password}=this.props;
        return (
          
            <div className="md col-8">
                <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter UserName"
                    className="form-control"
                    value={namestate}
                    onChange={this.changeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Passworld</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-control"
                    value={passwordstate}
                    onChange={this.changeInput}
                  />
                </div>
                <button type="submit" className="btn btn-danger btn-block">
                  Login
                </button>
                <p>{username}</p>
                <p>{id}</p>
                <p>{password}</p>
              </form>
            </div>
            
        )
    }
}
export default login;