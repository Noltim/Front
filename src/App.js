import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewForm from './components/pages/NewForm';
import FormPage from './components/pages/FormsPage';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newform" element={<NewForm />} />
          <Route path="/forms" element={<FormPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
