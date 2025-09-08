import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import AllShows from './pages/AllShows';
import OneShow from './pages/OneShow';
import SearchResults from './pages/SearchResults';

export default function App() {

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllShows />} />
            <Route path="/tvshow/:showID" element={<OneShow />} />
            <Route path="/search/:showName" element={<SearchResults />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
