// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './pages/Register';
// import AdminLogin from './pages/AdminLogin';
// import Participants from './pages/Participants';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home1 />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/participants" element={<Participants />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import Participants from './pages/Participants';
import Home1 from './pages/Home1';
import './App.css';

// Home page components
import About from './components/About';
import Tracks from './components/Tracks.jsx';
import AliasSection from './components/AliasSection.jsx';
import ContactPage from "./components/ContactPage.jsx";
import Timeline from "./components/Timeline.jsx";

// Home1 combines the sections for the homepage
function Home() {
  return (
    <div>
      <Home1 />
      <About />
      <Timeline />
      <Tracks />
      <AliasSection />
      <ContactPage />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/participants" element={<Participants />} />
      </Routes>
    </Router>
  );
}

export default App;
