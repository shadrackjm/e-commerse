import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl 
  px-4 py-20 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Code with SJM, MarketPlace. Access Free
        <strong className="font-extrabold text-primary sm:block"> Source code & Assets. </strong>
      </h1>
      <p className="mt-4 sm:text-xl/relaxed">
         source code & Assets
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary 
          px-12 py-3 text-sm font-medium text-white shadow
           hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 
           sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero