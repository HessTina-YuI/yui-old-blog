import React, { Component } from 'react';
import { message } from 'antd';
import { IoChevronBackOutline, IoChevronForwardOutline, IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";
import cls from 'classnames';
import style from './index.module.less';

class SkipTool extends Component {
    unCompleted = () => {
        message.info('功能还在施工中', 0.5).then();
    };

    render() {
        const {toTop, toBottom, isShow, process = '0'} = this.props;

        const toolStyle = cls(style.tool, isShow ? style.toolDisappear : '');

        return (
            <div className={toolStyle}>
                <ul>
                    {/* pre article */}
                    <li><IoChevronBackOutline className={style.icon} onClick={this.unCompleted}/></li>
                    {/* to top */}
                    <li><IoArrowUpOutline className={style.icon} onClick={toTop}/></li>
                    {/* to bottom */}
                    <li><IoArrowDownOutline className={style.icon} onClick={toBottom}/></li>
                    {/* next article */}
                    <li><IoChevronForwardOutline className={style.icon} onClick={this.unCompleted}/></li>
                    <li style={{width: process}}/>
                </ul>
            </div>
        );
    }
}

export default SkipTool;