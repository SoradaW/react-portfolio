import Home from "./Sections/Home";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import Navbar from "./Components/Navbar";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<main className="main">
			<Navbar />
      <div className="app_section_container">
        <Home />
        <About />
        <Work />
      </div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;