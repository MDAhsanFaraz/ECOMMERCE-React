import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// css import
import "./App.css";
function App() {
  return (
    <div className="app-wrapper">
      <Header color="light" light={true} expand="md" container="md" />
      <div style={{ marginTop: "100px" }}>Some</div>
      <Footer />
    </div>
  );
}

export default App;
