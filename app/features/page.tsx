export default function FeaturesPage() {
  return (
    <div className="features-container flex flex-col items-center">
      <h1 className="feature-title">Features</h1>

      <p className="feature-subtitle">
        This weather application provids fast, accurate, and free weather
        information.
      </p>

      <ul className="features-6">
        <li className="feature-text-10">
          🌍 Global city search with geocoding
        </li>
        <li className="feature-text-10">
          🌡️ Real‑time temperature and wind data
        </li>
        <li className="feature-text-10">
          ⏱️ Fast results with minimal loading time
        </li>
        <li className="feature-text-10">📊 Clean, user‑friendly interface</li>
      </ul>
    </div>
  );
}
