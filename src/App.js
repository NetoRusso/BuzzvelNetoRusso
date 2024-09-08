import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Buzzvel from './Components/Buzzvel';
import "animate.css/animate.compat.css"



function App() {

  return (
    <div className="App" id='home'>
      <Menu />
      <Header />
      <main>
        <About />
        <Projects />
        <Buzzvel />
        <Contact />
      </main>
      <Footer />

      {/* <div className="espaco" /> */}
    </div>
  );
}

export default App;
