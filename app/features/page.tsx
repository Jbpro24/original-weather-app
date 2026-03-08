export default function FeaturesPage() {
  return (
    <div className="features-container pt-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Features</h1>

      <p className="text-gray-700 mb-8 max-w-2xl">
        This weather application provides fast, accurate, and free weather
        information.
      </p>

      <ul className="features-6">
        <li className="feature-text-10 font-semibold p-6">
          🌍 Global city search with geocoding
        </li>
        <li className="features-text-10 semibold p-6">
          🌡️ Real‑time temperature and wind data
        </li>
        <li className="features-text-10 font-semibold p-6">
          ⏱️ Fast results with minimal loading time
        </li>
        <li className="features-text-10 font-semibold p-6">
          📊 Clean, user‑friendly interface
        </li> 
    
      </ul>
    </div>
  );
}