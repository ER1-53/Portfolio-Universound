import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { mainStore } from "./store";


ReactDOM.render(
    <Provider store={mainStore}>
        <App />,
    </Provider>,
    document.getElementById('root')
);
