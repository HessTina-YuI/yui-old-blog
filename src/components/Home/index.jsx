import React, { Component } from 'react';
import { Element, Events, scroller } from "react-scroll";
import Header from "../Header";
import Banner from "./Banner";
import { headerActionType } from "../../redux/constants";

class Home extends Component {
    state = {
        title: headerActionType.HOME.title,
        showHeaderMenu: false
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
        });
        Events.scrollEvent.register('end', () => {
        });
        window.addEventListener('scroll', this.bindHandleScroll);
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        const {showHeaderMenu} = this.state;

        const scrollTop = (event.target ? event.target.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.target ? event.target.body.scrollTop : 0);

        const showMenuTop = 200;

        if (scrollTop > showMenuTop && showHeaderMenu === false) {
            this.setState({showHeaderMenu: true});
        } else if (scrollTop <= showMenuTop && showHeaderMenu === true) {
            this.setState({showHeaderMenu: false});
        }
    };

    scrollToContainer = () => {
        scroller.scrollTo('container', {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuint',
            offset: 50
        });
    };

    render() {
        const {title, showHeaderMenu} = this.state;

        return (
            <>
                <Header title={title} showMenu={showHeaderMenu}/>
                <Banner scrollToContainer={this.scrollToContainer}/>
                <Element name="container">
                    <section>
                        <div style={{height: '1000px', background: 'red'}}/>
                    </section>
                </Element>
            </>
        );
    }
}

export default Home;