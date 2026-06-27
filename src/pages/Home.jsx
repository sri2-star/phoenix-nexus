import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Domains from "../components/Domains";
import Stats from "../components/Stats";
import Events from "../components/Events";
import WhyJoin from "../components/WhyJoin";
import JoinUs from "../components/JoinUs";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Stats />
      <Events />
      <WhyJoin />
      <JoinUs />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;