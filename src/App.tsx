import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SmoothScroll from './components/ui/SmoothScroll';
import ScrollAnimations from './components/ui/ScrollAnimations';
import ChatAssistant from './components/ChatAssistant';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return <SmoothScroll><ScrollAnimations><div className="min-h-screen"><ScrollToTop /><Navbar /><main><Routes><Route path="/" element={<HomePage />} /><Route path="/products" element={<ProductsPage />} /><Route path="/products/:id" element={<ProductDetailPage />} /></Routes></main><Footer /><ChatAssistant /></div></ScrollAnimations></SmoothScroll>;
}
export default App;
