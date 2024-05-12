import React from 'react';
import './Block.css'; // Импортируем файл стилей

const GamingNewsBlock = () => (
  <div className="block">
    <div className="image-container">
      <img src={require('./fluxo.webp')} alt="Gaming News Image" />
    </div>
    <div className="block-content">
      <h1>Today's News</h1>
      <div className="news-item">
        <p>paiN replaces Preasy at Global Esports Tour Rio</p>
      </div>
      <div className="news-item">
        <p>Team Liquid wins ESL Pro League Season 15</p>
      </div>
    </div>
  </div>
);

const RecentMatchesBlock = () => (
  <div className="block">
    <div className="image-container">
    <img src={require('./ESL2.webp')} alt="Gaming News Image" />
    </div>
    <div className="block-content">
    <h1>Recent Matches</h1>
    <div className="news-item">
      <p>Astralis vs. FaZe Clan - 2:0 (BO3) - ESL Pro League</p>
    </div>
    <div className="news-item">
      <p>Natus Vincere vs. G2 Esports - 1:2 (BO3) - BLAST Premier Spring Finals</p>
    </div>
    </div>
  </div>
);

const TournamentsBlock = () => (
  <div className="block">
    <div className="image-container">
    <img src={require('./Esl.webp')} alt="Gaming News Image" />
    </div>
    <div className="block-content">
    <h1>Tournaments</h1>
    <div className="news-item">
      <p>ESL One Cologne 2022 - August 16th-22nd</p>
    </div>
    <div className="news-item">
      <p>IEM Katowice 2023 - February 14th-26th</p>
    </div>
    </div>
  </div>
);

const PlayersOfTheMonthBlock = () => (
  <div className="block">
    <div className="image-container">
    <img src={require('./Bleed.webp')} alt="Gaming News Image" />
    </div>
    <div className="block-content">
    <h1>Players of the Month</h1>
    <div className="news-item">
      <p>s1mple (Natus Vincere) - MVP of ESL Pro League Season 15</p>
    </div>
    <div className="news-item">
      <p>ZywOo (Team Vitality) - Highest rated player at BLAST Premier Spring Finals</p>
    </div>
    </div>
  </div>
);

export { GamingNewsBlock, RecentMatchesBlock, TournamentsBlock, PlayersOfTheMonthBlock };
