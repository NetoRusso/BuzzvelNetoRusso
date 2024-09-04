import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';



function App() {

  return (
    <div className="App" id='home'>
      <Menu />
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      {/* <div className="espaco" /> */}
    </div>
  );
}

export default App;
