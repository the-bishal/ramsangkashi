import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PackagesPage from './pages/PackagesPage'
import ExplorePage from './pages/ExplorePage'
import GalleryPage from './pages/GalleryPage'
import BookNowPage from './pages/BookNowPage'
import UnderConstructionPage from './pages/UnderConstructionPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/book-now" element={<BookNowPage />} />
      <Route path="/under-construction" element={<UnderConstructionPage />} />
      <Route path="*" element={<UnderConstructionPage />} />
    </Routes>
  )
}

export default App

