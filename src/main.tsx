import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ProjectContextProvider from './contexts/projectContext.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </StrictMode>
);
