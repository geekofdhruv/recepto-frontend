import './App.css'
import Leads from './pages/leads'
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import AnalyticsPage from './pages/analytics'
import { AnalyticsProvider } from './context/leadAnalyticsContext'


function App() {
  return (
    <AnalyticsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Leads />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
    </Router>
    </AnalyticsProvider>
    
  )
}

export default App
