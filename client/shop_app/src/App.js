import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { WelcomePage } from "./ownerPages/Welcome";
import { NavBar } from "./ownerPages/components/Navbar"
import { ProductIndex } from './ownerPages/ProductIndex'
import { ProductNew } from './ownerPages/ProductNew'
import { ProductShow } from './ownerPages/ProductShow'
import { ProductEdit } from './ownerPages/ProductEdit'

import { NavBar2 } from './CustomerPages/components.js/Navbar2'
import { ProductIndex2 } from './CustomerPages/ProductIndex2'
import { Cart } from './CustomerPages/Cart'
import { ProductShow2 } from './CustomerPages/ProductShow2'
import { UserLogin } from './UserLogin'
import { OrderShow } from './CustomerPages/components.js/OrderShow'
import { Session } from './api/session';


function App() {

  const [ user, setUser ] = useState({})

  useEffect(()=>{
    Session.current().then((usert)=>{
      console.log(usert)
      setUser(usert);
      console.log(user)
    })
  },
  []
  );

  const handleLogOut = () => {
    return (
      Session.destroy().then(
        setUser({})
      )
    )
  }


  if(user.is_admin){
    return (
      <BrowserRouter>
        <header className="ui header">
          <NavBar handleLogOut={handleLogOut}/>
        </header>
        <div className="ui App">
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/products" component={ProductIndex} />
            <Route exact path="/products/new" component={ProductNew} />
            <Route exact path="/products/:id/edit" component={ProductEdit}/>
            <Route exact path="/products/:id" component={ProductShow} />
        </Switch>
        </div>
    </BrowserRouter>
    );
  }
    return (
      <BrowserRouter>
        <header className="ui header">
          <NavBar2 />
        </header>
        <div className="ui App">
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/Login" component={UserLogin}/>
            <Route exact path="/order/:id" component={OrderShow}/>
            <Route
              exact
              path="/Login"
              render={routeProps => (
                <UserLogin {...routeProps}/>
              )}
            />
            <Route exact path="/products" component={ProductIndex2} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/products/:id" component={ProductShow2} />
        </Switch>
        </div>
    </BrowserRouter>
    );
  }

export default App;
