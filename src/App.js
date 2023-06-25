import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SFA from "./pages/SFA";
import About from "./pages/About";

// import Contact from "./Contact"
// import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="case-study">
            <Route path="sfa" element={<SFA />} />
          </Route>
          {/* <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
