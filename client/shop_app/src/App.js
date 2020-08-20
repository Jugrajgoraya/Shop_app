import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WelcomePage } from "./ownerPages/Welcome";
import { NavBar } from "./ownerPages/components/Navbar"
import { ProductIndex } from './ownerPages/ProductIndex'
import { ProductNew } from './ownerPages/ProductNew'
import { ProductShow } from './ownerPages/ProductShow'
import { ProductEdit } from './ownerPages/ProductEdit'

function App() {
  return (
    <BrowserRouter>
  
      <Switch>
        <>
        <header>
          <NavBar />
        </header> 
        <div className="ui container App">
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/products" component={ProductIndex} />
          <Route exact path="/products/new" component={ProductNew} />
          <Route path="/products/:id/edit" component={ProductEdit}/>
          <Route path="/products/:id" component={ProductShow} />
        </div>
        </>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
