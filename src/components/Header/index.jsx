import React, { Component } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import { IoMenu } from "react-icons/io5";
import style from './index.module.less';

class Header extends Component {
    state = {
        showNav: true,
        showBar: false
    };

    componentDidMount() {
        const {showNav} = this.props;

        if (showNav === undefined) {
            this.setState({showMenu: false});
            setTimeout(() => this.setState({showMenu: true}), 0);
        } else {
            this.setState({showNav});
        }
    }

    clickNavbarMenuButton = () => {
        this.setState({showBar: !this.state.showBar});
    };

    render() {
        const showNav = this.props.showNav === undefined ? this.state.showNav : this.props.showNav;
        const {showBar} = this.state;

        const context = cls('context', style.innerWidth);
        const showNavStyle = cls(style.navbar, showNav ? style.sticky : '');
        const navbarMenuStyle = cls(style.navbarMenu, showBar ? style.navbarMenuShow : '');

        return (
            <nav className={showNavStyle}>
                <div className={context}>
                    <Link href="/"><a className={style.logo}/></Link>
                    <IoMenu className={style.navbarMenuButton} onClick={this.clickNavbarMenuButton}/>
                    <div className={navbarMenuStyle}>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/menu"><a>Menu</a></Link>
                        <Link href="/services"><a>Services</a></Link>
                        <Link href="/education"><a>Education</a></Link>
                        <Link href="/works"><a>Works</a></Link>
                        <Link href="/contact"><a>Contact</a></Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;