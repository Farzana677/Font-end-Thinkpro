import Title from "../components/title";

export default function Testimonials() {
  return (
    <section className="text-gray-600 font-semibold text-3xl container px-5 py-24 mx-auto">
      <div className="text-center p-10 font-semibold text-3xl">
        <Title text="TESTIMONIALS" />
      </div>
      <div className="flex justify-center">
        <div className="md:w-1/2 rounded bg-[rgba(37,38,41,0.7)] p-8 text-white">
          <p className="mb-6 font-medium text-lg">
            "We are absolutely thrilled with the work completed by this
            incredible team. From the initial consultation to the final
            walkthrough, every step of the process was handled with the utmost
            professionalism and care. The team took the time to understand our
            vision and transformed it into a stunning reality that exceeded all
            our expectations. What stood out the most was their dedication to
            open communication-we always felt involved and informed throughout
            the project. The finished space is not only beautiful but also
            functional and built to last. We’ve received countless compliments
            from friends and family. We wholeheartedly recommend their services
            to anyone looking for top-notch construction or renovation work!"
          </p>
          <p className="font-medium text-center">– Emily and David Carter</p>
        </div>
      </div>
    </section>
  );
}
