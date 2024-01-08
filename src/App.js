import "./App.css";
import Login from "./pages/Login/Login/Login";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
