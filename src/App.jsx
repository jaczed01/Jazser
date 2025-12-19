import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Custom from './pages/Custom'
import ProductDetail from './pages/ProductDetail'
import Swimwear from './pages/Swimwear'
import Underwear from './pages/Underwear'
import { I18nProvider } from './i18n'

function App() {
  return (
    <I18nProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/custom" element={<Custom />} />
              <Route path="/swimwear" element={<Swimwear />} />
              <Route path="/underwear" element={<Underwear />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nProvider>
  )
}

export default App





