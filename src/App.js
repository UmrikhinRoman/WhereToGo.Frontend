import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Root from 'Root';
import Router from 'Router';

export default class App extends Component {
    render() {
        return <Provider store={store}>
            <Root>
                <Router />
            </Root>
        </Provider>;
    }
}
