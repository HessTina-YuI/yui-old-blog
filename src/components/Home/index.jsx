import React, { Component } from 'react';
import { Element, Events, scroller } from "react-scroll";
import Banner from "./Banner";

class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register("begin",  () => {});
        Events.scrollEvent.register("end", () => {});
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    scrollToContainer = () => {
        scroller.scrollTo('container', {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuint',
            offset: 50
        })
    }

    render() {
        return (
            <>
                <Banner scrollToContainer={this.scrollToContainer}/>
                <Element name="container">
                    <div style={{height: '1000px', background: 'red'}}/>
                </Element>
            </>
        );
    }
}

export default Home;