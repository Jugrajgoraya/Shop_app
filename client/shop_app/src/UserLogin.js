import React from 'react'
import { Session } from './api/session'

const handlesignIn = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    return (
        Session.create(fd).then(data=>{
            console.log(data)
        })
    )
}


export const UserLogin = () =>{
    return(
        <div>
            <h1>  Sign In Page </h1>
            <form onSubmit ={event => handlesignIn(event)}>
            <div>
                <label htmlFor='email' >Email</label>
                <input id='email' name='email' type='email' placeholder='your_mail@email.com'/>
            </div>
            <div>
                <label htmlFor='password' >password</label>
                <input id='password' name='password' type='password' />
            </div>
            <input type='submit' value ='Sign In'/>
            </form>
        </div>
    )
}
 