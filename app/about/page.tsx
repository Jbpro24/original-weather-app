export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="text-4xl font-bold mb-6">About This Project</h1>

      <div className="flex-box-10">
        <p className="about-text" style={{ textAlign: "left" }} >
          Welcome to our Weather App, your reliable source for accurate,
          up-to-date weather information anytime, anywhere. Whether you're
          preparing for your morning commute, organizing a weekend trip, or
          tracking severe weather conditions, our platform delivers clear,
          easy-to-understand forecasts designed for everyday users.
        </p>

        <img
          src="/Screenshot 2026-02-26 at 17-35-04 sky - Google Search.png"
          alt="Weather Info"
          className="weather-image-2"
        />
      </div>

      <div className="flex-box-10">
        <img src="/Screenshot 2026-02-26 at 17-32-45 dark sky - Google Search.png" 
        alt="Weather-picture" 
        className="weather-image-3" />
         <p className="about-text" style={{ textAlign: "left" }}>
      Our app provides real-time temperature updates, hourly and 7-day forecasts, 
      precipitation chances, wind speed, humidity levels, UV index, and severe weather alerts. 
      We ensure the information you receive is timely, reliable, and accurate.
      </p>
      </div>

      <div className="flex-box-10">
        <p className="about-text" style={{ textAlign: "left" }}>
      Our app provides real-time temperature updates, hourly and 7-day forecasts, 
      precipitation chances, wind speed, humidity levels, UV index, and severe weather alerts. 
      We ensure the information you receive is timely, reliable, and accurate.
      </p>
      <img src="/Screenshot 2026-02-26 at 17-31-31 sky - Google Search.png"
      alt="Weather-picture" 
      className="weather-image-2" />
      </div> 
    </div>
  );
}
