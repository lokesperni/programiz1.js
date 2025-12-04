import React from "react";
import "./home.css";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
import {} from "react-router";
import {SiPython,SiMysql,SiCplusplus,SiJavascript,SiKotlin,SiNumpy,SiOpenjdk,SiPandas,SiR,SiRuby,SiRust,SiTypescript,SiCss3,SiGo,SiSwift,SiPycharm,SiC,SiHtml5,} from "react-icons/si";
import { FaCode } from "react-icons/fa";

function Home(){
  const navigate = useNavigate();

  function handleJs() {
    navigate("/js");
  }

  function handlePy() {
    navigate("/py");
  }

  return (
    <div className="home-container">
      <Nav />
      <h1 className="home-heading">Learn Programming For Free</h1>

      <div className="button-grid">
        <button className="lang-button" onClick={handlePy}><SiPython /> Python</button>
        <button className="lang-button"><SiHtml5 /> HTML5</button>
        <button className="lang-button"><SiMysql /> SQL</button>
        <button className="lang-button"><SiR /> R</button>
        <button className="lang-button"><SiCss3 /> CSS3</button>
        <button className="lang-button" onClick={handleJs}><SiJavascript /> JavaScript</button>
        <button className="lang-button"><SiTypescript /> TypeScript</button>
        <button className="lang-button"><SiOpenjdk /> Java</button>
        <button className="lang-button"><SiC /> C</button>
        <button className="lang-button"><SiCplusplus /> C++</button>
        <button className="lang-button"><SiGo /> Go</button>
        <button className="lang-button"><SiKotlin /> Kotlin</button>
        <button className="lang-button"><SiSwift /> Swift</button>
        <button className="lang-button"><FaCode /> DSA</button>
        <button className="lang-button"><SiNumpy /> NumPy</button>
        <button className="lang-button"><SiPandas /> Pandas</button>
        <button className="lang-button"><SiPycharm /> PyCharm</button>
        <button className="lang-button"><SiRust /> Rust</button>
        <button className="lang-button"><SiRuby /> Ruby</button>
      </div>

      <div className="promo-section">
        <h1>Programiz</h1>
        <h2>Our Hands-on Coding Platform</h2>
      </div>
    </div>
  );
}

export default Home;
