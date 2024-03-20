import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { mainStore } from "./store";


// Render the main application component wrapped in the Redux store provider
ReactDOM.render(
    <Provider store={mainStore}>
        <App />,
    </Provider>,
    document.getElementById('root')
);
