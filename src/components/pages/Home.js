import React from "react";
import foto from "../layout/background.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="centered">
        <div>
          <h1>Krzysztof Siwek</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <img src={foto} alt="home-img" />
      </div>
    </div>
  );
};

export default Home;
