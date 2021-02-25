import React, { Component } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import { IoMenu } from "react-icons/io5";
import { FadeIn } from "../Animista";
import style from './index.module.less';

class Header extends Component {
    state = {
        showHeader: false,
        mobileMenu: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        const {showHeader} = this.state;

        const scrollTop = event.target.documentElement.scrollTop;

        const {showHeaderTop = 0} = this.props;

        if (scrollTop >= showHeaderTop && showHeader === false) {
            this.setState({showHeader: true});
        } else if (scrollTop < showHeaderTop && showHeader === true) {
            this.setState({showHeader: false});
        }
    };

    clickNavbarMenuButton = () => {
        this.setState({mobileMenu: !this.state.mobileMenu});
    };

    render() {
        const {showHeader, mobileMenu} = this.state;

        const context = cls('context', style.innerWidth);
        const showNavStyle = cls(style.navbar, showHeader ? style.sticky : '');
        const navbarMenuStyle = cls(style.navbarMenu, mobileMenu ? style.navbarMenuShow : '');

        return (
            <FadeIn className={showNavStyle}>
                    <nav className={context}>
                        {/* logo */}
                        <Link href="/"><a className={style.logo}/></Link>
                        {/* mobile menu button */}
                        <IoMenu className={style.navbarMenuButton} onClick={this.clickNavbarMenuButton}/>
                        {/* computer menu button */}
                        <div className={navbarMenuStyle}>
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/menu"><a>Menu</a></Link>
                            <Link href="/services"><a>Services</a></Link>
                            <Link href="/education"><a>Education</a></Link>
                            <Link href="/works"><a>Works</a></Link>
                            <Link href="/contact"><a>Contact</a></Link>
                        </div>
                    </nav>
            </FadeIn>
        );
    }
}

export default Header;