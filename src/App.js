import Footer from "./components/Footer";
import JoinSection from "./components/JoinSection";
import MainSection from "./components/MainSection";
import MobileSection from "./components/MobileSection";
import NavBar from "./components/NavBar";
import PowerSection from "./components/PowerSection";
import SystemSection from "./components/SystemSection";
import WebSection from "./components/WebSection";

function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <MainSection />
        <WebSection />
        <MobileSection />
        <SystemSection />
        <JoinSection />
        <PowerSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
