import Home from "./Sections/Home";
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
      </div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;