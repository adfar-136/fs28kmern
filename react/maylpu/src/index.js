import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';


import storeee from './Reduxclass/store';


const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
    <Provider store={storeee}>
       <App/>
    </Provider>
);


