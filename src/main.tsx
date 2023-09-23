import ReactDOM from 'react-dom/client'
import './services/firebase.js'
import './theme/index.css'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
