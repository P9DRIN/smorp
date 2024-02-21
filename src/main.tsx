import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ProductProvider } from './context/ProductContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { OrderProvider } from './context/OrderContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom'; 



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <OrderProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
      </OrderProvider>
    </AuthProvider>
    </Router>

  </React.StrictMode>,
)
