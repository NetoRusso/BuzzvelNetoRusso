import { useTranslation } from 'react-i18next';
import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';



function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
