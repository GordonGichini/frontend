import React, {Component} from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component{
render(){
return( <React.Fragment>
    <NavBar />
    <ShoppingCart />
    <Product />
</React.Fragment>
);
}
}