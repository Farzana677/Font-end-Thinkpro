import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <section className="min-h-screen flex flex-grow items-center justify-center gap-4">
        <div className="text-center">
          <h1 className="text-6xl font-semibold text-[#64AF37]">404</h1>
          <p className="text-lg ">Oops! Looks like you're lost.</p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-[#64AF37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p>
            Let's get you back{" "}
            <Link to="/" className="text-[#64AF37]">
              Go to Home
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
