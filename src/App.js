import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Card from "./Components/Card";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Showcase />
      <Contact />
    </div>
  );
}

export default App;
