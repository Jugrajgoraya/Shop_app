import React from 'react'
import { Session } from "./api/session"
import './App.css'


export const UserLogin = (props) =>{

  const handlesignIn = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    return (
      Session.create({
        email: fd.get('email'),
        password: fd.get('password')
      }).then(user =>{
          console.log(user)
          props.history.push("/")
      })
    )
  }

    return(
      <div className="logIn">
        <main className="ui container">
          <h1 className="heading">Sign In</h1>
          <form onSubmit={handlesignIn} className="ui large form clearing segment">
            <div className="field">
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className="field">
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            {/* <Link to='/users/new' className='ui floated positive button'>Create New User</Link> */}
            <input type='submit' value='Sign In' className="ui right floated positive button" />
          </form>
        </main>
      </div>
    )
}
 