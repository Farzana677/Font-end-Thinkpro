import img from "../assets/christina.jpg";
export default function Herosection() {
  return (
    <>
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-5 py-24 gap-2">
        <img
          className="object-contain h-auto max-w-full mx-auto"
          alt="hero"
          src={img}
        />

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-2xl mb-4 font-medium text-[#393939] tracking-wide leading-[40px]">
            Emily Carter, CEO
          </h1>
          <p className="mb-4 leading-[40px] text-xl font-light">
            Think of us as an extension of your team. Working by your side, we
            find creative, practical solutions to solve challenges throughout
            your project’s evolution. Our goal has always been to create more
            than just buildings; we strive to craft spaces that inspire, endure,
            and serve as a testament to the trust our clients place in us. As
            CEO, I am proud to lead a team that shares a commitment to
            innovation, sustainability, and exceptional craftsmanship.
          </p>

          <button className="inline-flex text-[#64AF37] bg-white py-2 px-6 focus:outline-none border border-[#64AF37] text-lg">
            Let’s Collaborate
          </button>
        </div>
      </section>
    </>
  );
}
