// custom component
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./routes/MainRoutes";
// css import
import "./App.css";
function App() {
  return (
    <div className="app-wrapper">
      {/* Common Header for all pages */}
      <Header color="light" light={true} expand="md" container="md" />
      <MainRoutes />
      {/* Common Footer for all pages */}
      <Footer />
    </div>
  );
}

export default App;
