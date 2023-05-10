import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/header.tsx'
import "./styles/index.scss"
import MeaningSection from './components/result-meaning.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeaderComponent />
    <MeaningSection></MeaningSection>
  </React.StrictMode>,
)
