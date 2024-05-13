import './App.css';
import './Block.css'; // Импорт файла стилей для блоков
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './footer'; // Импорт компонента подвала
import './footer.css';
import backgroundImage from './banner.webp';
import { GamingNewsBlock, RecentMatchesBlock, TournamentsBlock, PlayersOfTheMonthBlock } from './Blocks';
import About from './About';
import Teams from './Teams';
import News from './News';
import Forum from './Forum'; 
import Login from './login'; // Импортируем компонент формы входа
import ResponsiveStyles from './ResponsiveStyles';

function App() {
  
  const styles = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '60vh', 
  };

  return (
    <Router>
      <div style={styles}>
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<HomeWithNews />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/news" element={<News />} />
            <Route path="/forum" element={<Forum />} /> 
          </Routes>
          <Footer /> {/* Подключение компонента подвала */}
        </main>
      </div>
    </Router>
  );
}

const HomeWithNews = () => {
  return (
    <div>
      
      
      <div className="blocks-container">
        <div className="block"><GamingNewsBlock /></div>
        <div className="block"><RecentMatchesBlock /></div>
        <div className="block"><TournamentsBlock /></div>
        <div className="block"><PlayersOfTheMonthBlock /></div>
      </div>
    </div>
  );
}

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
}



export default App;
