import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';
import './components/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Provider store={store}>
    <App />
</Provider>);

