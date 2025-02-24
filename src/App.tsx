import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Layout from "./pages/Layout/layout";
import About from "./pages/about";

import Runo from "./pages/runo";
import Services from "./pages/services";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/career" element={<Career />} /> */}

          <Route path="/runo" element={<Runo />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
