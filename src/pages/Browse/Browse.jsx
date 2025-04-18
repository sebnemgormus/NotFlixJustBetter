import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Browse.css";

const Browse = () => {
  return (
    <div className="browse">
      <Navbar />
      <div className="browse-filter">
        <h1>Browse by Languages</h1>
        <div className="browse-list-right">
          <p>Select Your Preferences</p>
          <div className="preference-dropdown">
            <select className="preference-select">
              <option value="Original">Original Language</option>
              <option value="Dubbing">Dubbing</option>
              <option value="Subtitles">Subtitles</option>
            </select>
          </div>
          <div className="preference-dropdown">
            <select className="preference-select">
              <option value="Original">Original Language</option>
              <option value="Dubbing">Dubbing</option>
              <option value="Subtitles">Subtitles</option>
            </select>
          </div>  
          <p>Sort by</p>
          <div>
            <div className="preference-dropdown">
              <select className="preference-select">
                <option value="Suggestions">Suggestions for you</option>
                <option value="Year">Year Released</option>
                <option value="Az">A-Z</option>
                <option value="Za">Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
