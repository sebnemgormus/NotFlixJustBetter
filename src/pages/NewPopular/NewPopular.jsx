import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const NewPopular = () => {
    return (
        <div className="popular" style={{ marginTop: '150px' }}>
          <Navbar />
          <div className="more-cards">
            <TitleCards title={"New on Netflix"} category={"top_rated"} />
            <TitleCards title={"Worth the Wait"} category={"popular"} />
            <TitleCards title={"Coming Next Week"} category={"upcoming"} />
            <TitleCards title={"Coming This Week"} category={"now_playing"} />
          </div>
          <Footer />
        </div>
      );
}

export default NewPopular;
