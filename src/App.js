import "./App.css";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Showcase from "./Components/Showcase";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
