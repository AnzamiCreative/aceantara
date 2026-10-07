import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Tentang from './components/Tentang.jsx';
import Layanan from './components/Layanan.jsx';
import Portofolio from './components/Portofolio.jsx';
import Proses from './components/Proses.jsx';
import Kontak from './components/Kontak.jsx';
import Footer from './components/Footer.jsx';
import FloatingWa from './components/FloatingWa.jsx';
import { LangProvider } from './i18n/index.jsx';
import { ThemeProvider } from './theme/index.jsx';

/** Landing page Aceantara: Hero, Tentang, Layanan, Portofolio, Proses, Kontak. */
export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div
          id="home"
          className="min-h-screen bg-mint-50 font-sans text-ink dark:bg-[#0A1811] dark:text-white"
        >
          <Navbar />

          <main>
            <Hero />
            <Tentang />
            <Layanan />
            <Portofolio />
            <Proses />
            <Kontak />
          </main>

          <Footer />

          {/* Tombol WhatsApp melayang */}
          <FloatingWa />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}
