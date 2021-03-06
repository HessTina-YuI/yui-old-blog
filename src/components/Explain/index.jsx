import React, { Component } from 'react';
import Header from "../Header";
import DashBoard from "./DashBoard";
import yaml from '../../config/common.yml';
import style from './index.module.less';

class Explain extends Component {
    state = {
        plan: {
            tasks: yaml.plan.tasks,
            columns: yaml.plan.columns,
            columnOrder: yaml.plan.columnOrder
        }
    };

    render() {
        const {plan} = this.state;

        return (
            <div className={style.explain}>
                {/* Header component */}
                <Header showHeaderTop={0}/>

                <DashBoard {...plan}/>
            </div>
        );
    }
}

export default Explain;