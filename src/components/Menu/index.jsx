import React, { Component } from 'react';
import Header from "../Header";
import { headerActionType } from "../../redux/constants";

class Menu extends Component {
    render() {
        return (
            <>
                <Header title={headerActionType.MENU.title}/>
                Hello
            </>
        );
    }
}

export default Menu;