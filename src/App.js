import { useTranslation } from 'react-i18next';
import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import About from './Components/About';



function App() {
  const { t } = useTranslation();

  return (
    <div className="App" id='home'>
      <Menu
        menu1={t("Menu.menu1")}
        menu2={t("Menu.menu2")}
        menu3={t("Menu.menu3")}
      />
      <Header
        text1={t("Greeting.text1")}
        text2={t("Banner.text2")}
        text3={t("Banner.text3")}
        
      />
      <main>
        <About 
        aboutText1={t("About.aboutText1")}
        aboutText2={t("About.aboutText2")}
        aboutText3={t("About.aboutText3")}
        />
      </main>

      <div className="espaco" />
    </div>
  );
}

export default App;
