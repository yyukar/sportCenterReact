import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Classes from "./components/Classes";
import Bmi from "./components/Bmi";
import Trainers from "./components/Trainers";
import Purchase from "./components/Purchase";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Classes />
        <Bmi />
        <Trainers />
        <Purchase />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
