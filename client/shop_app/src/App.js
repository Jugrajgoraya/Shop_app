import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WelcomePage } from "./ownerPages/Welcome";
import { NavBar } from "./ownerPages/components/Navbar"
import { ProductIndex } from './ownerPages/ProductIndex'
import { ProductNew } from './ownerPages/ProductNew'
import { ProductShow } from './ownerPages/ProductShow'
import { ProductEdit } from './ownerPages/ProductEdit'

import { NavBar2 } from './CustomerPages.js/components.js/Navbar2'
import { ProductIndex2 } from './CustomerPages.js/ProductIndex2'
import { Cart } from './CustomerPages.js/Cart'
import { ProductShow2 } from './CustomerPages.js/ProductShow2'

const user = "customer"

function App() {


  if(user == "admin"){
    return (
      <BrowserRouter>
        <header className="ui header">
          <NavBar />
        </header>
        <div className="ui container App">
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
  if(user == "customer"){
    return (
      <BrowserRouter>
        <header className="ui header">
          <NavBar2 />
        </header>
        <div className="ui container App">
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/products" component={ProductIndex2} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/products/:id" component={ProductShow2} />
        </Switch>
        </div>
    </BrowserRouter>
    );
  }
  }

export default App;
