import img from "../assets/gif_back.gif";
export default function Dream() {
  return (
    <>
      <section className="text-center p-10">
        <h1 className="font-semibold  text-3xl mb-4">
          "Crafting Dreams into Reality"
        </h1>
        <p className="tracking-widesr text-2xl font-light pb-4">
          Step into our world of innovative design and expert craftsmanship.
          Watch as we transform ideas into stunning structures, blending
          creativity, precision, and dedication. This is more than just
          construction—it's the art of bringing dreams to life.
        </p>
      </section>
      <img src={img} className="w-[100vw] aspect-auto"></img>
    </>
  );
}
