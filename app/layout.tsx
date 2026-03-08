import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Weather App",
  description: "Modern weather app built with Next.js and Open-Meteo API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />

        <main className="max-w-5xl mx-auto px-6 pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}


