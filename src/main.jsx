import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import NotFound from '@/Base/components/NotFound'
import './index.css'
import UseTransition from './v18_ooks/UseTransition'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/main" element={<UseTransition />} />
      </Routes>
      <ToastContainer />
    </Router>
  </React.StrictMode>
)
