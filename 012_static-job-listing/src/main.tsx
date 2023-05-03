import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import HeaderT from './Header.tsx'
import Content from './Content.tsx'
import App from './App.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)