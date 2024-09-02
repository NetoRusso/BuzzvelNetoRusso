import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import About from './Components/About';



function App() {

  return (
    <div className="App" id='home'>
      <Menu />
      <Header />
      <main>
        <About />
      </main>

      <div className="espaco" />
    </div>
  );
}

export default App;
