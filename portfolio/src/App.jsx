import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Ideas from "./sections/Ideas";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

function App() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Ideas />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
