import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'


/*
StrictMode,就是因为app被StrictMode包裹,所以在开发模式下会被渲染两次?
StrictMode是什么意思,有什么用?
StrictMode: 严格模式，就是对 React 组件的渲染过程进行检测，

*/
createRoot(document.getElementById('app')).render(
    <App />
)
