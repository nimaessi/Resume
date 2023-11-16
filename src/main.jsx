import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from "./app/store";
ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <Provider store = {store}>
            <App />
        </Provider>
    </ThemeProvider>
)
