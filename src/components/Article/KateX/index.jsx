import React, { Component } from 'react';
import TeX from '@matejmazur/react-katex';

require('katex/dist/katex.min.css');

class KateX extends Component {
    render() {
        const {math, block} = this.props;

        return (
            <>
                <TeX math={math} block={block}/>
            </>
        );
    }
}

export default KateX;