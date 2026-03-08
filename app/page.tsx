"use client";

import { useState } from "react";
import "./globals.css";
import React from "react";
import Image from "next/image";

interface WeatherData {
  temperature_2m: number;
  wind_speed_10m: number;
}

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      setLoading(true);
      setError("");

      if (!city.trim()) {
        setError("Please enter a city name");
        return;
      }

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
      );

      if (!geoRes.ok) throw new Error("City not found");

      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0)
        throw new Error("City not found");

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`,
      );

      if (!weatherRes.ok) throw new Error("Unable to fetch weather");

      const weatherData = await weatherRes.json();
      setWeather(weatherData.current);

      setCity(`${name}, ${country}`);
    } catch (err: any) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 flex flex-col items-center">
      <div className="cloud-container">
        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-4 text-center">
          Weather Application
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-600 mb-10 text-2xl text-center">
          Search weather information for any city worldwide.
        </p>

        {/* MAIN LAYOUT */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE — CENTERED CONTENT */}
          <div className="flex-1">
            {/* SEARCH BAR (CENTERED) */}
            <div className="w-full max-w-xl mx-auto flex gap-3 mb-10 text-xl">
              <input
                type="text"
                placeholder="Search city…"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 border border-gray-300 px-5 py-4 rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 text-xl"
              />
              <button
                onClick={getWeather}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow 
                         hover:bg-blue-700 transition text-xl"
              >
                Search
              </button>
            </div>

            {/* STATUS */}
            {loading && <p className="text-center">Loading…</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* WEATHER CARD (CENTERED) */}
            {weather && (
              <div className="w-full max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>

                <p className="text-lg">
                  <span className="font-medium">Temperature:</span>{" "}
                  {weather.temperature_2m}°C
                </p>
                <p className="text-lg">
                  <span className="font-medium">Wind Speed:</span>{" "}
                  {weather.wind_speed_10m} m/s
                </p>
              </div>
            )}
          </div>
        </div>
    </div>


        {/* RIGHT SIDE — ADDITIONAL INFORMATION */}
        <div className="flex-box-50">
          <div className="flex-1">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ textAlign: "left" }}>How This App Works</h2>


          <p className="text-gray-600 text-sm" style={{ textAlign: "left" }}>
            This application uses real-time weather data from the Open-Meteo
            API. Enter any city name to instantly view temperature and wind
            speed.
          </p>

    
          <div className="grid grid-cols-1 gap-8 mt-10">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3
                className="font-semibold text-lg mb-2"
                style={{ textAlign: "left" }}
              >
                Fast Results
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ textAlign: "left" }}
              >
                Get accurate weather data in seconds.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3
                className="font-semibold text-lg mb-2"
                style={{ textAlign: "left" }}
              >
                Global Search
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ textAlign: "left" }}
              >
                Works with any city worldwide.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3
                className="font-semibold text-lg mb-2"
                style={{ textAlign: "left" }}
              >
                Clean Interface
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ textAlign: "left" }}
              >
                Simple, modern, and easy to use.
              </p>
            </div>
        </div>
        
          </div>
        </div>
      </div>
  );
}
