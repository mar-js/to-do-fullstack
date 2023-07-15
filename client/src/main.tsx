import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ToDoProvider } from 'providers'
import { App } from './App.tsx'
import 'styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>
)
