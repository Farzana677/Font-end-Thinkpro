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

{
  /* <section className="glass">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
    //     <div className="w-full bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-100 md:text-2xl ">
    //           Sign in to your account
    //         </h1>
    //         <form className="space-y-4 md:space-y-6" action="#">
    //           <div>
    //             <label className="block mb-2 text-sm font-medium text-slate-100">
    //               Your email
    //             </label>
    //             <input */
}
//               type="email"
//               name="email"
//               id="email"
//               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
//               placeholder="name@company.com"
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-slate-100">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="••••••••"
//               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input
//                   id="remember"
//                   aria-describedby="remember"
//                   type="checkbox"
//                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
//           >
//             Sign in
//           </button>
//           <p className="text-sm font-light text-slate-100">
//             Don’t have an account yet?
//             <a
//               href="#"
//               className="font-medium text-blue-600 hover:underline"
//             >
//               Sign up
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
