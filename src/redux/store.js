import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import AnchorMenuReducer from "./AnchorMemu/reducer";

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== "production") {
        // 开发模式打印redux信息
        middleware.push(logger);
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const allReducer = combineReducers({
    anchorMenu: AnchorMenuReducer
});

export default createStore(allReducer, bindMiddleware([thunk]));
