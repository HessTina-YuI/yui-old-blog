import { headerActionType } from "../constants";

const initState = headerActionType.HOME;

const HeaderReducer = (preState = initState, action) => {
    const {type} = action;

    switch (type) {
        case headerActionType.HOME:
            return headerActionType.HOME;
        case headerActionType.MENU:
            return headerActionType.MENU;
        default:
            return preState;
    }
};

export default HeaderReducer;