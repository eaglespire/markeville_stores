import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {MDBContainer} from "mdbreact";

import {Switch,Route} from 'react-router-dom'
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import SingleProduct from "./components/products/SingleProduct";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <MDBContainer fluid={true}>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signin'} component={SignIn} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/checkout'} component={CheckOut} />
                <Route path={'/cart'} component={CartPage} />
                <Route exact={true} path= '/products/:id' component={SingleProduct} />
            </Switch>
        </MDBContainer>
        <Footer/>
      </React.Fragment>
  );
}
export default App;
