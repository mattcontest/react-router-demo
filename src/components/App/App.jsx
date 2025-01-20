import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import About from "../AboutMe/AboutMe";
import Content from "../Content/Content";
import AboutUs from "../AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/content"
          element={
            <Content>
              <h1>lol</h1>
              <h1>lol</h1>
            </Content>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
