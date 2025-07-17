import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// css import
import "./App.css";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="app-wrapper">
      {/* Common Header for all pages */}
      <Header color="light" light={true} expand="md" container="md" />
      <Home />
      {/* Common Footer for all pages */}
      <Footer />
    </div>
  );
}

export default App;
