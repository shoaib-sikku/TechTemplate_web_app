import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./style/Responsive.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/services" element={<Services></Services>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
