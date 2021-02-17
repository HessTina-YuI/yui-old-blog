import React, { Component } from 'react';
import Link from 'next/link';
import cls from 'classnames';
import { Menu } from "antd";
import { headerActionType } from "../../redux/constants";
import style from './index.module.less';
import './index.less';

class Header extends Component {
    render() {
        const {title, showMenu = true} = this.props;

        const headerStyle = cls(style.header, showMenu ? style.headerDisplay : style.headerUnDisplay);

        return (
            <header className={headerStyle}>
                {showMenu ?
                    (
                        <Menu className={style.menu}  selectedKeys={[title]} mode="horizontal">
                            <Menu.Item key={headerActionType.HOME.title}>
                                <Link href={headerActionType.HOME.link}><a className={style.menuText}>主页</a></Link>
                            </Menu.Item>
                            <Menu.Item key={headerActionType.MENU.title}>
                                <Link href={headerActionType.MENU.link}><a className={style.menuText}>目录</a></Link>
                            </Menu.Item>
                        </Menu>
                    ) : ''
                }
            </header>
        );
    }
}

export default Header;