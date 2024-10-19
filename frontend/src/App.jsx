import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { useEffect } from 'react';
import AvailableSoon from './pages/Available';

function App() {

  const AudioPageRedirect = () => {
    useEffect(() => {
      window.location.href = "http://localhost:5000"; // Redirect to the desired port
    }, []); // Runs only once when this component is rendered
    
    return null; // No need to render anything else since we're redirecting
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Only redirect when /audiowla route is matched */}
          <Route path="/audiowla" element={<AudioPageRedirect />} />
          <Route path="/available_soon" element={<AvailableSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
