import React from "react";
import "../style.css";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img className="weather-logo" src="/react-weather-app/icons/home.png" />
      <h1 className="citylabel">Find Weather of your city</h1>
      <div className="search-form">
        <form onSubmit={fetchWeather} className="search">
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
            autoFocus
            required
            className="input-search"
          />
          <button type={"submit"} className="search-btn">
            Search
          </button>
        </form>
      </div>
    </>
  );
};
export default CityComponent;
