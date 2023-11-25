import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewForm from "./components/pages/NewForm";
import Container from "./components/pages/layout/Container"


function App() {
  return (

    <Router>

      <div>
      <ul>
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contato</Link>
        <Link to="/company" >Empresa</Link>
        <Link to="/newform" >Novo Formulario</Link>
      </ul>
      </div>

      <Container>
      <Routes>
        <Route path="/" element= {< Home />}/>
        <Route path="/company" element= {< Company />}/>
        <Route path="/contact" element= {< Contact />}/>
        <Route path="/newform" element= {< NewForm />}/>
      </Routes>
      </Container>

      <footer>Rodapé</footer>

    </Router>
  );
}

export default App;