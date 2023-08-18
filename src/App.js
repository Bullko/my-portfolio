import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Card />
      <Card />
      <Contact />
    </div>
  );
}

export default App;
