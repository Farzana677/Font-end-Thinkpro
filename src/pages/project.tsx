import img1 from "../assets/ist.png";
import Title from "../components/title";
export const Projects = () => {
  return (
    <section className="text-gray-600 container px-5 py-24 mx-auto flex flex-wrap">
      <div className="text-center p-10 font-semibold text-3xl">
        <Title text="FEATURED PROJECTS" />
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="md:p-2 p-1 w-full ">
            <img
              src={img1}
              alt="gallery"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>

        <div className="w-full flex flex-wrap md:w-1/2">
          <div className="w-full md:p-2 p-1 md:w-1/2 ">
            <img
              src={img1}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <div className="w-full md:p-2 p-1 md:w-1/2 ">
            <img
              src={img1}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <div className="w-full md:p-2 p-1 md:w-1/2 ">
            <img
              src={img1}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <div className="w-full md:p-2 p-1 md:w-1/2 ">
            <img
              src={img1}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
