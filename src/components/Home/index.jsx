import React, { Component } from 'react';
import { Element, Events, scroller, animateScroll } from 'react-scroll';
import Header from '../Header';
import Banner from './Banner';
import About from './About';
import SkipTool from '../SkipTool';
import TopArticle from './TopArticle';
import Footer from '../Footer';

class Home extends Component {
    state = {
        showHeaderMenu: false,
        process: '0%'
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
        });
        Events.scrollEvent.register('end', () => {
        });
        window.addEventListener('scroll', this.bindHandleScroll);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const browserHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        const visualHeight = window.innerHeight || document.documentElement.clientHeight;

        this.validHeigh = browserHeight - visualHeight;
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        const {showHeaderMenu} = this.state;

        const scrollTop = event.target.documentElement.scrollTop;
        const process = Math.floor(scrollTop * 100 / this.validHeigh) + '%';

        const showMenuTop = 200;

        if (scrollTop > showMenuTop && showHeaderMenu === false) {
            this.setState({showHeaderMenu: true});
        } else if (scrollTop <= showMenuTop && showHeaderMenu === true) {
            this.setState({showHeaderMenu: false});
        }

        this.setState({process});
    };

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
        const {showHeaderMenu, process} = this.state;

        return (
            <>
                {/* Header component */}
                <Header showNav={showHeaderMenu}/>
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
                <SkipTool toTop={this.toTop} toBottom={this.toBottom} isShow={showHeaderMenu} process={process}/>
                <Footer/>
            </>
        );
    }
}

export default Home;