import React, { Component } from 'react';
import { Element, Events, scroller, animateScroll } from 'react-scroll';
import Header from '../Header';
import Banner from './Banner';
import About from './About';
import SkipTool from '../SkipTool';
import TopArticle from './TopArticle';
import Footer from '../Footer';

class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
        });
        Events.scrollEvent.register('end', () => {
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToContainer = () => {
        scroller.scrollTo('container', {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuint',
            offset: -50
        });
    };

    toTop = () => {
        animateScroll.scrollToTop();
    };

    toBottom = () => {
        animateScroll.scrollToBottom();
    };

    render() {
        return (
            <>
                {/* Header component */}
                <Header showHeaderTop={200}/>
                {/* Banner component */}
                <Banner scrollToContainer={this.scrollToContainer}/>
                {/* About component */}
                <Element name="container">
                    <About/>
                </Element>
                {/* TopArticle component */}
                <Element name="topArticle">
                    <TopArticle/>
                </Element>
                {/* SkipTool component */}
                <SkipTool toTop={this.toTop} toBottom={this.toBottom} showMenuTop={200}/>
                <Footer/>
            </>
        );
    }
}

export default Home;