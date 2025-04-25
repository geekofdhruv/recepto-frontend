import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CreditsProvider } from './context/credits.tsx'
import { AnalyticsProvider } from './context/leadAnalyticsContext.tsx'
import { LeadProvider } from './context/unlockLead.tsx'


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreditsProvider>
      <AnalyticsProvider>
        <LeadProvider>
      <App />
      </LeadProvider>
      </AnalyticsProvider>
    </CreditsProvider>
  </StrictMode>
)
