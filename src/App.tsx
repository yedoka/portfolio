import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './styles/globals.scss';

const App = () => (
  <div>
    <Header />
    <main>
      <Hero />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
