import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather mx-3 p-7 md:p-4 md:mx-auto mt-3 md:w-1/2">
      <div className="top flex justify-around items-center">
        <div>
          <p className="text-2xl font-bold">{data.city}</p>
          <p className="text-md font-thin">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="mt-5 flex justify-around items-center">
        <div>
          <p className="text-4xl md:text-6xl">{Math.round(data.main.temp)}°C</p>
        </div>
        <div>
          <div className="md:flex-1 lg:w-60 flex flex-col gap-2">
            <div className="">
              <h2 className="text-lg">Details</h2>
            </div>
            <div className="flex flex-col lg:flex-row md:justify-between">
              <span className="text-sm">Feels like</span>
              <span className="font-bold">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="flex flex-col lg:flex-row md:justify-between">
              <span className="text-sm">Wind</span>
              <span className="font-bold">{data.wind.speed} m/s</span>
            </div>
            <div className="flex flex-col lg:flex-row md:justify-between">
              <span className="text-sm">Humidity</span>
              <span className="font-bold">{data.main.humidity}%</span>
            </div>
            <div className="flex flex-col lg:flex-row md:justify-between">
              <span className="text-sm">Pressure</span>
              <span className="font-bold">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
