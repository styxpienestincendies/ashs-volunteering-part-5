import './App.css';
import { NavBar } from './componets/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Stories, Forum, Contact, Button, Impact } from './newpages/main'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/button" element={<Button />} />
      </Routes>
    </div>
  );
}

export default App;
