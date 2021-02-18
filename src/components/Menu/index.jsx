import React, { Component } from 'react';
import Header from "../Header";

class Menu extends Component {
    render() {
        return (
            <>
                <Header/>
                <div style={{
                    background: "black",
                    height: "1000px",
                    width: "100%"
                }}/>
            </>
        );
    }
}

export default Menu;