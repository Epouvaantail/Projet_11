import './App.css';
import Router from "./router/router";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;