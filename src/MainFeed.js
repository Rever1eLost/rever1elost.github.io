import React from 'react';
import './MainFeed.css'; // Импортируем файл стилей для MainFeed
import { GamingNewsBlock, RecentMatchesBlock, TournamentsBlock, PlayersOfTheMonthBlock } from './Blocks';

function MainFeed({ news, addNews }) {
  const handleButtonClick = () => {
    addNews("New game release: 'Cyber World' is now available!");
  };

  return (
    <div className="main-feed">
      <h2>Main Feed</h2>
      
      <button onClick={handleButtonClick}>Add News</button>
    </div>
  );
}

export default MainFeed;
