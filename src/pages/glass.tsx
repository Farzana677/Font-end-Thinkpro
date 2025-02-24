export default function Glass() {
  return (
    <section className="glass w-full flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <form className="flex flex-col justify-center w-full max-w-sm mx-auto card p-8 gap-2 text-white">
        <h1 className="text-white font-bold text-3xl"> Login Form</h1>

        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="block w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />

        <label htmlFor="password" className="block mb-2 text-sm font-medium ">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />

        <button className="w-full p-3 mt-4 bg-indigo-900 text-white rounded shadow">
          Login
        </button>
      </form>
    </section>
  );
}

