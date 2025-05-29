import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Photos from './components/Photos';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <Routes>
      <Route path="/" element={
          <>
            <Hero />
            <Specials />
            <Photos />
          </>
        }
      />
      <Route path="/menu" element={<Menu />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  )
}

export default App
