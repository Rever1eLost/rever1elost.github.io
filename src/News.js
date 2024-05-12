import React from 'react';
import './News.css';
import ResponsiveStyles from './ResponsiveStyles';

const NewsPage = () => {

  const newsItems = [
    {
      title: 'New Game Release: "Epic Quest"',
      description: 'Get ready for the most epic adventure of the year!',
      date: 'May 3, 2024'
    },
    {
      title: 'Forum Update: New Features and Improvements',
      description: 'Weve added some exciting new features to the forum. Check them out!',
      date: 'April 27, 2024'
    },
    {
      title: 'Community Event: "Game Night"',
      description: 'Join us for a night of gaming fun and prizes!',
      date: 'May 10, 2024'
    },
    {
      title: 'New Merchandise: Official Game T-Shirts',
      description: 'Show off your love for the game with our new official T-shirts!',
      date: 'May 1, 2024'
    },
    {
      title: 'Game Update: New Levels and Enemies',
      description: 'Explore new levels and battle new enemies in the latest game update!',
      date: 'April 30, 2024'
    },
    {
      title: 'Community Contest: Design a New Character',
      description: 'Think you have what it takes to design a new character for the game? Enter our contest!',
      date: 'April 25, 2024'
    }
  ];


  return (

    <div className="news-page" style={{ backgroundImage: `url('HERf8y3YR0hcwqJ6MB7DDe.webp')` }}>

      <h1>Latest News</h1>

      <ul>

        {newsItems.map((item, index) => (

          <li key={index}>

            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <span>{item.date}</span>

          </li>

        ))}

      </ul>

    </div>

  );

};


export default NewsPage;