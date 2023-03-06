import Home from "./Sections/Home";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<main className="main">
			<Navbar />
      <div className="app_section_container">
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;
