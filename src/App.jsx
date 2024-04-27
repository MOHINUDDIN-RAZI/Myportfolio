import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Portfolio></Portfolio>
      <Welcome></Welcome>
      <Button></Button>
      <About></About>
      <Skills></Skills>
    </>
  );
}

export default App;
