import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let persistor = persistStore(store);

root.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router>
      <PersistGate  persistor={persistor}>
        <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


