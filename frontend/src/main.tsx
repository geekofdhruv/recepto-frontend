import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CreditsProvider } from './context/credits.tsx'
import { AnalyticsProvider } from './context/leadAnalyticsContext.tsx'
import { LeadProvider } from './context/unlockLead.tsx'


import App from './App.tsx'
import { FilterProvider } from './context/filterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreditsProvider>
      <AnalyticsProvider>
        <LeadProvider>
          <FilterProvider>
      <App />
          </FilterProvider>
      </LeadProvider>
      </AnalyticsProvider>
    </CreditsProvider>
  </StrictMode>
)
