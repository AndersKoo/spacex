// SPACEX COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Launch from "./components/Launch";
import Firststage from "./components/Firststage";
import Engine from "./components/Engine";
import Secondstage from "./components/Secondstage";
import Rocket from "./components/Rocket";
import Footer from "./components/Footer/Footer";
// STYLES AND RESPONSIVE DESIGN
import "./styles.css";
import "./mobile.css";
// ANIMATE ON SCROLL EFFECTS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
      <Launch />
      <Firststage />
      <Engine />
      <Secondstage />
      <Rocket />
      <Footer />
    </div>
  );
}

export default App;
