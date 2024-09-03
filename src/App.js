import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';



function App() {

  return (
    <div className="App" id='home'>
      <Menu />
      <Header />
      <main>
        <About />
        <Projects />
      </main>

      {/* <div className="espaco" /> */}
    </div>
  );
}

export default App;
