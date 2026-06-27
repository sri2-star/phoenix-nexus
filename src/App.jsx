import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Domains from "./components/Domains";
import Events from "./components/Events";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Events />
      <Team />
      <JoinUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;