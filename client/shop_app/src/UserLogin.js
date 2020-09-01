import React from 'react'


export const UserLogin = (props) =>{
  let handlesignIn = props.handlesignIn
    return(
      <main>
        <h1>Sign In</h1>
        {/* {
          this.state.errors.length > 0 ? (
            <div>
              { this.state.errors.map(e => e.message).join(', ')}
            </div>
          ) : null
        } */}
        <form onSubmit={(event)=>handlesignIn(event)} className="ui large form clearing segment">
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
    )
}
 