// Forum.js
import React from 'react';
import './Forum.css'; // Import CSS for styling
import ResponsiveStyles from './ResponsiveStyles';

function Forum() {
  return (
    <div className="forum-container">
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
      <h1></h1>
      <div className="sections">
        <div className="section">
          <div className="beautiful-block">
            <h1>Esports</h1>
            <br></br>
            <ul className="topics">
              <li><a href="#">Top Esports Teams</a></li>
              <li><a href="#">Esports Tournaments</a></li>
              <li><a href="#">Esports Strategy Discussions</a></li>
              <li><a href="#">Esports Player Profiles</a></li>
              <li><a href="#">Esports Sponsorship Deals</a></li>
              <li><a href="#">Esports Broadcasting Partnerships</a></li>
              <li><a href="#">Esports Prize Pools</a></li>
              <li><a href="#">Esports Industry Growth</a></li>
              <li><a href="#">Esports Regulation and Governance</a></li>
              <li><a href="#">Esports Health and Well-being</a></li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="beautiful-block">
            <h1>Players</h1>
            <br></br>
            <ul className="topics">
              <li><a href="#">Favorite Esports Players</a></li>
              <li><a href="#">Player Profiles and Interviews</a></li>
              <li><a href="#">Player Stats and Performance Analysis</a></li>
              <li><a href="#">Player Achievements and Records</a></li>
              <li><a href="#">Player Endorsement Deals</a></li>
              <li><a href="#">Player Training and Practice Techniques</a></li>
              <li><a href="#">Player Career Paths and Opportunities</a></li>
              <li><a href="#">Player Retirement and Transition</a></li>
              <li><a href="#">Player Personal Life and Hobbies</a></li>
              <li><a href="#">Player Fan Engagement and Interaction</a></li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="beautiful-block">
            <h1>News</h1>
            <br></br>
            <ul className="topics">
              <li><a href="#">Latest Esports News</a></li>
              <li><a href="#">Announcements and Updates</a></li>
              <li><a href="#">Industry Trends</a></li>
              <li><a href="#">New Game Releases</a></li>
              <li><a href="#">Technology Advancements</a></li>
              <li><a href="#">Business Partnerships</a></li>
              <li><a href="#">Legal and Regulatory Changes</a></li>
              <li><a href="#">Market Analysis and Reports</a></li>
              <li><a href="#">Event Coverage and Highlights</a></li>
              <li><a href="#">Community Spotlights and Features</a></li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="beautiful-block">
            <h1>Gossips and Rumors</h1>
            <br></br>
            <ul className="topics">
              <li><a href="#">Player Transfer Speculations</a></li>
              <li><a href="#">Scandals and Controversies</a></li>
              <li><a href="#">Behind the Scenes Secrets</a></li>
              <li><a href="#">Team Drama and Conflicts</a></li>
              <li><a href="#">Coach and Manager Rumors</a></li>
              <li><a href="#">Tournament Rigging Allegations</a></li>
              <li><a href="#">Game Patch Leaks</a></li>
              <li><a href="#">Organization Financial Troubles</a></li>
              <li><a href="#">Player Retirement Rumors</a></li>
              <li><a href="#">Celebrity Sightings at Events</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="empty-space"></div>
    </div>
  );
}

export default Forum;
