import Home from "./pages/Home";
import SFA from "./pages/SFA";
import About from "./pages/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Contact from "./Contact"
// import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/case-study">
        <Route path="sfa" element={<SFA />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
