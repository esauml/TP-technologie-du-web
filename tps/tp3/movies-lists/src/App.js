import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import films from "./Movies.json";

function Movies(props) {
  return (
    <div className="card">
      <div className="card-content" style={{backgroundImage:
        "url("+props.image+")"}}>
       
        <div className="container">
        <h4 className="card__title">{props.fullTitle}</h4>

          <p>Crew: {props.crew}</p>
          <p>Year: {props.year}</p>
          <p>Rating: {props.imDbRating}</p>
        </div>
      </div>
    </div>
  );
}

Movies.propTypes = {
  image: PropTypes.string,
  fullTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  crew: PropTypes.string,
  year: PropTypes.string,
  imDbRating: PropTypes.string,
};

export default function App() {
  return (
    <div className="App">
      <h1>Films</h1>
      <main className="main-area">
        <div className="cards">
          {films.items.map((item, index) => {
            return <Movies {...item} key={index} />;
          })}
        </div>
      </main>
    </div>
  );
}
