import culture from "../assets/culture.svg";
import team from "../assets/team.svg";
export default function Team() {
  const cards = [
    {
      id: 1,
      imageSrc: culture,
      title: "Our Team",
      description:
        "We go all in, pursuing every project and relationship with energy that inspires..",
      linkText: "Learn More",
    },
    {
      id: 2,
      imageSrc: team,
      title: "Our Culture",
      description:
        "We go all in, pursuing every project and relationship with energy that inspires..",
      linkText: "Learn More",
    },
    {
      id: 3,
      imageSrc: culture,
      title: "Diversity. Equity",
      description:
        "We go all in, pursuing every project and relationship with energy that inspires.",
      linkText: "Learn More",
    },
  ];

  return (
    <>
      <section className="container mx-auto">
        <h3 className="text-center mb-4 text-[#393939] font-semibold text-2xl">
          “We are more than just builders; we are creators of inspiring spaces.”
          <span className="text-[#999] text-lg block mt-4">
            -Emily Carter, CEO
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div className="p-4">
              <div key={card.id} className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src={card.imageSrc}
                />
              </div>
              <h2 className="text-xl font-semibold text-[#393939] mt-5 text-center">
                {card.title}
              </h2>
              <p className="text-lg font-normal p-2">{card.description}</p>
              <a className="text-[#64AF37] inline-flex items-center p-2 underline">
                {card.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
