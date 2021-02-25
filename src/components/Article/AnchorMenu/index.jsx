import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scrollToView } from '../../../lib/scroller';
import style from './index.module.less';

class AnchorMenu extends Component {
    fontSize = {
        1: '1.25rem',
        2: '1.0rem',
        3: '.75rem',
        4: '.625rem',
        5: '0.5rem'
    };

    marginLeft = {
        1: '0',
        2: '.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem'
    };

    render() {
        const {anchors} = this.props;
        return (
            <>
                {
                    anchors ? anchors.map((anchor, index) => {
                        const {level, value} = anchor;

                        return (
                            <div className={style.anchor} key={index}
                                 onClick={() => scrollToView(anchor.value, 100)}
                                 style={{fontSize: this.fontSize[level], marginLeft: this.marginLeft[level]}}>
                                <span>
                                    {value}
                                </span>
                            </div>
                        );
                    }) : null
                }
            </>
        );
    }

}

export default connect(
    state => ({anchors: state.anchorMenu})
)(AnchorMenu);
