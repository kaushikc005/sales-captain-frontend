import React from "react";

const WelcomeSection = () => {
  return (
    <main className="z-1 w-screen overflow-x-hidden">
      <aside className="hero-section top-0 right-0 w-2/3 absolute z-0 ">
        <img src="public\curve-1.png" alt="curve" width="100%"  />
      </aside>

      <article className="flex xs:flex-col md:flex-row justify-center items-center 
       md:gap-20 xs:p-10 md:p-28">
        <section className="xs:flex md:block xs:flex-col items-center">
          <h1 className="xs:text-2xl md:text-5xl font-bold leading-normal">
            Your go to
            <span className="text-blue-500"> Solutions,</span> <br />
            For all your problems.
          </h1>
          <br />
          <p className="text-gray-500 xs:text-lg md:text-2xl xs:text-center md:text-left">
            Artificial Intelligence powered easy-to-use tools to get <br/> more
            customers & give them a better experience
          </p>
          <button className="bg-blue-500 text-white p-3 rounded-xl mt-8 text-lg font-semibold
          hover:bg-gray-200 hover:text-blue-500">
            Get Started
          </button>
        </section>

        <section className="xs:w-screen md:w-1/3 xs:p-8 md:p-0">
          <img src="welcome.png" alt="welcome-banner" width="100%" />
        </section>
      </article>
    </main>
  );
};

export default WelcomeSection;
