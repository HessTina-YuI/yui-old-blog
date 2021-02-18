import React, { Component } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import { Menu } from "antd";
import { headerActionType } from "../../redux/constants";
import style from './index.module.less';

class Header extends Component {
    render() {
        const {showMenu = true} = this.props;

        const showNav = cls(style.navbar, showMenu ? style.sticky : '');

        return (
            <nav className={showNav}>
                <div className={style.innerWidth}>
                    <Link href="/"><a className={style.logo}/></Link>
                    <div className={style.navbarMenu}>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/menu"><a>Menu</a></Link>
                        <Link href="/about"><a>About</a></Link>
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