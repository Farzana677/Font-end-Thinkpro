import SimpleSlider from "../components/slider";

import Consultation from "./consultation";
import Dream from "./dream";
import Footer from "./footer";
import { Projects } from "./project";
import Services from "./services";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <>
      <SimpleSlider />
      <Consultation />
      <Projects />
      <Services />
      <Dream />
      <Testimonials />
      <Footer />
    </>
  );
}
