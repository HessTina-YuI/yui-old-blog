import React, { Component } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import style from './index.module.less';

class Header extends Component {
    state = {
        showMenu: true
    };

    componentDidMount() {
        const {showMenu} = this.props;

        if (showMenu === undefined) {
            this.setState({showMenu: false});
            setTimeout(() => this.setState({showMenu: true}), 0);
        } else {
            this.setState({showMenu});
        }
    }

    render() {
        const showMenu = this.props.showMenu === undefined ? this.state.showMenu : this.props.showMenu;

        const context = cls('context', style.innerWidth);
        const showNav = cls(style.navbar, showMenu ? style.sticky : '');

        return (
            <nav className={showNav}>
                <div className={context}>
                    <Link href="/"><a className={style.logo}/></Link>
                    <div className={style.navbarMenu}>
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