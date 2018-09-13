import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import user from 'components/Home/reducer'

// noinspection JSCheckFunctionSignatures
export default createStore(
    combineReducers({
        user

    }), {},
    composeWithDevTools(
        applyMiddleware(
            thunk
            //declare middlewares here
        )
    )
);