import React, { Component } from 'react';
import style from './index.module.less';

class Footer extends Component {

    render() {
        return (
            <footer className={style.footer}>
                <span>Crafted by YuI with Next.js</span>
                <span>Copyright &copy;{new Date().getFullYear()} YuI. All rights reserved.</span>
            </footer>
        );
    }
}

export default Footer;