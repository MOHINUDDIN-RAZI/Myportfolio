import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Portfolio></Portfolio>
      <Welcome></Welcome>
    </>
  );
}

export default App;
