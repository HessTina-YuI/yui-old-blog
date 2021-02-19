import React, { Component } from 'react';
import cls from 'classnames';
import { Rotate } from '../../Animista';
import style from './index.module.less';

class ModuleSplit extends Component {
    render() {
        const {title} = this.props;

        const icon = cls('iconfont', style.icon);

        return (
            <div className={style.moduleBackground}>
                <Rotate>
                    <i className={icon}>&#xe600;</i>
                </Rotate>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.dashed}>
                    <div/>
                </div>
            </div>
        );
    }
}

export default ModuleSplit;