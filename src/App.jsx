import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CategoryNav from './components/CategoryNav'
import LogoSection from './components/LogoSection'
import FloatingCart from './components/FloatingCart'
import AIAssistant from './components/AIAssistant'
import Footer from './components/Footer'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="site-chrome">
        <CategoryNav />
        <LogoSection />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/factory" element={<Men />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <FloatingCart />
        <AIAssistant />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
