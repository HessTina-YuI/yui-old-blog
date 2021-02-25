import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';
import { message } from 'antd';
import { IoChevronBackOutline, IoChevronForwardOutline, IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";
import cls from 'classnames';
import style from './index.module.less';

class SkipTool extends Component {
    state = {
        showHeaderMenu: false,
        process: '0'
    };

    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const browserHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        const visualHeight = window.innerHeight || document.documentElement.clientHeight;

        this.validHeigh = browserHeight - visualHeight;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        const {showHeaderMenu} = this.state;

        const scrollTop = event.target.documentElement.scrollTop;
        const process = Math.floor(scrollTop * 100 / this.validHeigh) + '%';

        const {showMenuTop = 0} = this.props;

        if (scrollTop >= showMenuTop && showHeaderMenu === false) {
            this.setState({showHeaderMenu: true});
        } else if (scrollTop < showMenuTop && showHeaderMenu === true) {
            this.setState({showHeaderMenu: false});
        }

        this.setState({process});
    };

    unCompleted = () => {
        message.info('功能还在施工中', 0.5).then();
    };

    render() {
        const {showHeaderMenu, process = '0'} = this.state;

        const toolStyle = cls(style.tool, showHeaderMenu ? style.toolDisappear : '');

        return (
            <div className={toolStyle}>
                <ul>
                    {/* pre article */}
                    <li><IoChevronBackOutline className={style.icon} onClick={this.unCompleted}/></li>
                    {/* to top */}
                    <li><IoArrowUpOutline className={style.icon} onClick={() => animateScroll.scrollToTop()}/></li>
                    {/* to bottom */}
                    <li><IoArrowDownOutline className={style.icon} onClick={() => animateScroll.scrollToBottom()}/></li>
                    {/* next article */}
                    <li><IoChevronForwardOutline className={style.icon} onClick={this.unCompleted}/></li>
                    <li style={{width: process}}/>
                </ul>
            </div>
        );
    }
}

export default SkipTool;