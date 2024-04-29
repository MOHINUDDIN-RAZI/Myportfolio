import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Portfolio></Portfolio>
      <Welcome></Welcome>
      <Button></Button>
      <About></About>
      <Skills></Skills>
      <Certificates></Certificates>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
