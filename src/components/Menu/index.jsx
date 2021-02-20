import React, { Component } from 'react';
import Header from "../Header";

class Menu extends Component {
    render() {
        return (
            <>
                <Header showNav={false}/>
                <div style={{
                    background: "black",
                    height: "200vh",
                    width: "100%"
                }}/>
            </>
        );
    }
}

export default Menu;