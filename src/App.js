import logo from "./logo.svg";
import "./App.css";
import About from "./components/about/About";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Tetimonials from "./components/testimonials/Tetimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Tetimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
