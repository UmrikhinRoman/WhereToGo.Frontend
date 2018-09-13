import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Flex from 'scenes/FlexScene/Flex';
import Home from "./scenes/Home/Home";

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/flex" component={Flex}/>
        </Switch>
    </BrowserRouter>;
}

Router.propTypes = {};