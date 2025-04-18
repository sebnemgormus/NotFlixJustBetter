import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const MyList = () => {
    return (
        <div className="popular" style={{ marginTop: '150px' }}>
          <Navbar />
          <div className="more-cards">
            <TitleCards title={"My List"} category={"top_rated"} />
          </div>
          <Footer />
        </div>
      );
}

export default MyList;
