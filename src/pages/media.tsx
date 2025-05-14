import Title from "../components/title";
import media from "../assets/media.svg";

export default function Media() {
  const cards = [
    {
      id: 1,
      imageSrc: media,
      title: "Transforming Ideas into Stunning Realitievs.",
      description: "Toronto Life",
      linkText: "Learn More",
    },
    {
      id: 2,
      imageSrc: media,
      title: "Transforming Ideas into Stunning Realities.",
      description: "Toronto Life",
      linkText: "Learn More",
    },
    {
      id: 3,
      imageSrc: media,
      title: "Transforming Ideas into Stunning Realities.",
      description: "Toronto Life",
      linkText: "Learn More",
    },
  ];

  return (
    <>
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <Title text="MEDIA & PRESS" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-8">
              <div className="relative">
                <div className="h-[225px] w-full overflow-hidden">
                  <img
                    alt="Toronto Life"
                    className="object-cover w-full h-full"
                    src={card.imageSrc}
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 py-4 px-8 md:w-[90%]">
                  <span className="text-white font-semibold text-center text-3xl">
                    TORONTO LIFE
                  </span>
                </div>
              </div>

              <div className="text-center gap-4">
                <h2 className="text-[#393939] text-lg font-light">
                  {card.title}
                </h2>
                <p className="text-[#64AF37] font-normal">{card.description}</p>
                <button className="text-[#64AF37] font-normal hover:underline">
                  {card.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
