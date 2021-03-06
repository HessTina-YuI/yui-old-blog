import React, { Component } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import { RiBuilding2Fill, RiLeafFill, RiCameraLensFill, RiMessage3Fill, RiBlazeFill } from "react-icons/ri";
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

        if (showHeaderTop === 0) {
            return;
        }

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
        const {showHeaderTop = 0} = this.props;
        const {showHeader, mobileMenu} = this.state;

        const context = cls('context', style.innerWidth);
        const showNavStyle = cls(style.navbar, showHeader || showHeaderTop === 0 ? style.sticky : '');
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
                        <Link href="/">
                            <a>
                                <RiBuilding2Fill className={style.icon}/>
                                <span>初</span>
                            </a>
                        </Link>
                        <Link href="/category">
                            <a>
                                <RiLeafFill className={style.icon}/>
                                <span>融</span>
                            </a>
                        </Link>
                        <Link href="/archive">
                            <a>
                                <RiCameraLensFill className={style.icon}/>
                                <span>存</span>
                            </a>
                        </Link>
                        <Link href="/explain">
                            <a>
                                <RiMessage3Fill className={style.icon}/>
                                <span>响</span>
                            </a>
                        </Link>
                        <Link href="/friend">
                            <a>
                                <RiBlazeFill className={style.icon}/>
                                <span>友</span>
                            </a>
                        </Link>
                    </div>
                </nav>
            </FadeIn>
        );
    }
}

export default Header;