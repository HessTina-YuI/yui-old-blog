import { anchorMenuType } from '../constants';

const initState = [];

const AnchorMenuReducer = (preState = initState, action) => {
    const {type, data} = action;

    switch (type) {
        case anchorMenuType.INIT:
            return initState;
        case anchorMenuType.ADD:
            return [...preState, data];
        default:
            return preState;
    }
};

export default AnchorMenuReducer;
