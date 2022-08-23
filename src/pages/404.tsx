import Link from "next/link";

export default function Custom404() {
  return (
    <div className="items-center mx-auto my-auto text-center max-w-max">
      <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
      <div className="">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-500">
          Please check the URL in the address bar and try again.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link href="/">Go back to Home</Link>
        </button>
      </div>
    </div>
  );
}
