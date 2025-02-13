import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Layout from "./pages/Layout/layout";
import About from "./pages/about";
import Career from "./pages/career";
import Cards from "./pages/cards";
import Runo from "./pages/runo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/career" element={<Career />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/runo" element={<Runo />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
