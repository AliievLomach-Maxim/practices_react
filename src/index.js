import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from 'store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter basename="practices_react">
            <App />
        </BrowserRouter>
    </Provider>
)
