import React, { Component, Fragment } from "react";
import Header from './Header';
import Body from './Body';
import 'bulma/css/bulma.css';
import './styles.css';

class FoodBanks extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <Body />
            </Fragment>
        );
    }
}
export default FoodBanks;