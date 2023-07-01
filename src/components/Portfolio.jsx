import React from "react";

const Portfolio = () => {
  const images = [
    "feature1.png",
    "feature2.png",
    "feature3.png",
    "feature4.png",
  ];
  return (
    <main className=" p-4 relative my-8 w-screen overflow-x-hidden">
      <section
        className="flex flex-col justify-center items-center
       m-auto z-10 gap-4"
      >
        <h1 className="text-4xl font-semibold">Our Portfolio</h1>
        <p className="text-2xl font-medium text-center">
          We stay on top of our industry by being experts in yours.
        </p>
      </section>

      <section className="flex flex-col gap-20 justify-around  md:p-4 w-screen md:ml-14">
        <article className="flex xs:flex-col md:flex-row items-center 
        justify-center md:gap-40 md:p-10 xs:my-8 md:my-0
        xs:mr-8 md:mr-0
        ">
          <aside className="leading-loose xs:flex xs:flex-col md:block items-center justify-center">
            <img src="logo1.png" alt="logo" width="50px" />
            <h1 className="xs:text-xl md:text-3xl  font-bold">
              Get discovered by <br /> more customers
            </h1>
            <p className="break-words xs:text-md md:text-lg xs:text-center md:text-left xs:my-4 md:my-0">
              Higher reviews & better listings make you more
              <br /> discoverable to people organically
            </p>

            <button className="text-blue-700 font-bold text-2xl my-4 hover:text-black">
              Get Started
            </button>
          </aside>
            <img
              src="feature1.png"
              alt="../assets/feature1"
              width="350px"
              className="xs:w-72 md:w-80 hover:scale-95 self-center"
            />
        </article>


        <article className="flex xs:flex-col md:flex-row items-center justify-center 
        md:gap-40 md:p-10 xs:my-8 md:my-0 xs:mr-8 md:mr-0">
          <img
            src="feature2.png"
            alt="feature2"
            width="350px"
            className="xs:w-72 md:w-80 hover:scale-95 self-center"
          />
          <aside className="leading-loose  xs:flex xs:flex-col md:block items-center justify-center">
            <img src="logo4.png" alt="logo" width="50px" />
            <h1 className="xs:text-xl md:text-3xl font-bold">
              Faster conversion with our <br />
              Captain AI
            </h1>
            <p className="break-words xs:text-md md:text-lg xs:text-center md:text-left xs:my-4 md:my-0">
              Automate web chat, messaging, <br />
              reviews & feedbacks with our AI assistant
            </p>

            <button className="text-blue-700 font-bold text-2xl my-4 hover:text-black">
              Get Started
            </button>
          </aside>
        </article>
   
        {/* curve */}
        <aside className=" w-50 absolute left-0 z-0">
          <img src="curve-2.png" alt="curve2"  className="xs:w-60 md:w-96" />
        </aside>

        <article className="flex xs:flex-col md:flex-row items-center justify-center 
        md:gap-40 md:p-10 xs:my-8 md:my-0 xs:mr-8 md:mr-0">
          <aside className="leading-loose  xs:flex xs:flex-col md:block items-center justify-center">
            <img src="logo2.png" alt="logo" width="50px" />
            <h1 className="xs:text-xl md:text-3xl font-bold">Marketing that works for you</h1>
            <p className="break-words xs:text-md md:text-lg xs:text-center md:text-left xs:my-4 md:my-0">
              Run highly effective & targeted campaigns on text & emails
              <br />
              and put your customer data to use.
            </p>

            <button className="text-blue-700 font-bold text-2xl my-4 hover:text-black">
              Get Started
            </button>
          </aside>
          <img
            src="feature3.png"
            alt="feature3"
            width="350px"
            className="xs:w-72 md:w-80 hover:scale-95 self-center"
          />
        </article>


        <article className="flex xs:flex-col md:flex-row items-center justify-center 
        md:gap-40 md:p-10 xs:my-8 md:my-0 xs:mr-8 md:mr-0" >
          <img
            src="feature4.png"
            alt="feature4"
            width="350px"
            className="xs:w-72 md:w-80 hover:scale-95 self-center"
          />
          <aside className="leading-loose  xs:flex xs:flex-col md:block items-center justify-center">
            <img src="logo3.svg" alt="logo" width="50px" />
            <h1 className="xs:text-xl md:text-3xl font-bold">Training & Support</h1>
            <p className="break-words xs:text-md md:text-lg xs:text-center md:text-left xs:my-4 md:my-0">
              Talk to a dedicated relationship manager to get the help you need.
              <br />
              No wait time, a dedicated line just for you.
            </p>

            <button className="text-blue-700 font-bold text-2xl my-4 hover:text-black">
              Get Started
            </button>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default Portfolio;
