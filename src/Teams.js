// Teams.js
import React from 'react';
import './Teams.css'; // Импорт CSS для стилизации
import ResponsiveStyles from './ResponsiveStyles';

function Teams() {
  // Фиктивные данные о командах и их рейтинге
  const teamsData = [
    { rank: 1, name: 'FaZe', points: 1000, roster: ['karrigan', 'rain', 'frozen', 'ropz', 'broky'] },
    { rank: 2, name: 'Natus Vincere', points: 701, roster: ['Aleksib', 'iM', 'b1t', 'jL', 'w0nderful'] },
    { rank: 3, name: 'MOUZ', points: 587, roster: ['Brollan', 'siuhy', 'torzsi', 'jimpphat', 'xertioN'] },
    { rank: 4, name: 'Spirit', points: 583, roster: ['chopper', 'shiro', 'magixx', 'zont1x', 'donk'] },
    { rank: 5, name: 'G2', points: 562, roster: ['Niko', 'huNter', 'nexa', 'HooXi', 'm0NESY'] },
    { rank: 6, name: 'Vitality', points: 503, roster: ['apEx', 'ZywOo', 'flameZ', 'Spinx', 'mezii'] },
    { rank: 7, name: 'Eternal Fire', points: 307, roster: ['MAJ3R', 'XANTARES', 'woxic', 'Calyx', 'Wicadia'] },
    { rank: 8, name: 'Astralis', points: 265, roster: ['device', 'stavn', 'br0', 'jabbi', 'Staehr'] },
    { rank: 9, name: 'Virtus.pro', points: 228, roster: ['electroNic', 'FL1T', 'Jame', 'n0rb3r7', 'fame'] },
    { rank: 10, name: 'Heroic', points: 227, roster: ['NertZ', 'TeSeS', 'nicoodoz', 'sjuush', 'kyxsan'] },
    
  ];

  return (
    <div className="teams-container">
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
      <h1>EC Top Teams</h1>
      <div className="teams-list">
        {/* Отображение списка команд и их рейтинга */}
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Points</th>
              <th>Roster</th> 
            </tr>
          </thead>
          <tbody>
            {teamsData.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.points}</td>
                <td>
                  <ul>
                    {team.roster.map((player, idx) => (
                      <li key={idx}>{player}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
