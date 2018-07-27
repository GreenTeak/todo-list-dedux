import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index"
import UserInfo from "./componets/userInfoComponet"
import { Route, Switch} from 'react-router'
import {applyMiddleware,compose} from 'redux'
import TodoList from './componets/todoComponet'
import { createBrowserHistory } from "history";
import {routerMiddleware, connectRouter, ConnectedRouter} from "connected-react-router";

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(reducer),
    compose(applyMiddleware(routerMiddleware(history))
    )
);
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Route path="/UserInfo/:id" component={UserInfo} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);


