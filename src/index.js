
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Provider } from './utils/Store'

function App (){
    return (
        <Provider>
            <Home />
        </Provider>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);