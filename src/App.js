import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Reservation from "./Components/Reservation";
import OrderOnline from "./Components/OrderOnline";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/login" component={Login} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
