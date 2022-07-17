import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <h2 className="title text-center mt-4 font-bold">Daily forecast</h2>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="md:w-2/3 md:mx-auto h-10 mx-3 my-1 px-2 flex justify-between items-center gap-5 bg-white rounded-md">
                  <div className="flex items-center justify-evenly">
                    <img
                      alt="weather"
                      className="icon-small pl-2"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="ml-1 font-bold">{forecastDays[idx]}</label>
                  </div>
                  <label className="text-sm font-bold text-gray-700">
                    {item.weather[0].description}
                  </label>
                  <label className="sm:text-sm hidden sm:contents">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <div className="md:w-2/3 md:mx-auto detailspanel bg-white mx-3 rounded-md">
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                </div>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                </div>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                </div>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Wind speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                </div>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Sea level</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                </div>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)} °C</label>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
