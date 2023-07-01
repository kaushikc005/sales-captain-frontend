import React from "react";

const Footer = () => {
  return (
    <footer className="p-8 w-screen overflow-hidden ">
      <hr></hr>

      <section className="flex xs:flex-col md:flex-row gap-20 justify-center  md:w-screen">
        <div className="flex flex-col items-center gap-10 text-gray-600">
          <img
            src="footerlogo.png"
            alt="logo"
            width="200px"
            className="h-8 mt-4"
          />
          <nav className="flex md:flex-col xs:flex-row items-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.theclosecompany.sales_book&hl=en_IN&gl=US">
              <img
                src="playstore.png"
                alt="#"
                width="140px"
                className="cursor-pointer"
              />
            </a>

            <a href="#">
              <img
                src="appstore.png"
                alt="#"
                width="140px"
                className="cursor-pointer"
              />
            </a>
          </nav>
        </div>
        <nav className=" xs:grid xs:grid-cols-2 md:flex gap-20 mt-4 justify-center">
          <ul className=" text-gray-500 font-bold flex flex-col gap-4">
            <li>
              <h1 className="text-xl text-black font-extrabold">Products</h1>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Webchat</a>
            </li>
            <li>
              <a href="#">Referals</a>
            </li>
            <li>
              <a href="#">Text Campaigns</a>
            </li>
          </ul>
          <ul className=" text-gray-500 font-bold flex flex-col gap-4">
            <li>
              <h1 className="text-xl text-black font-extrabold">Resources</h1>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Google Services</a>
            </li>
            <li>
              <a href="#">Online Reviews</a>
            </li>
            <li>
              <a href="#">Contact Sales</a>
            </li>
            <li>
              <a href="#">Business Text Messaging</a>
            </li>
          </ul>

          <ul className=" text-gray-500 font-bold flex flex-col gap-4">
            <li>
              <h1 className="text-xl text-black font-extrabold">Partners</h1>
            </li>
            <li>
              <a href="#">Become a Partner</a>
            </li>
            <li>
              <a href="#">Become a Partner</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
          </ul>

          <ul className=" text-gray-500 font-bold flex flex-col gap-4">
            <li>
              <h1 className="text-xl text-black font-extrabold">Company</h1>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>

          <article className="flex flex-col justify-center gap-4 xs:w-screen md:w-full">
            <h1 className="text-xl text-black font-extrabold ">About us</h1>
            <section className="flex md:flex-col xs:gap-8 md:gap-4">
              <div>
                <h1 className="text-lg text-black font-bold">
                  US Headquarters
                </h1>
                <p>
                  447 Broadway,
                  <br /> 2nd Floor,
                  <br /> New York 10013
                </p>
              </div>
              <div>
                <h1 className="text-lg text-black font-bold">India office</h1>
                <p>
                  1467 Janani <br />
                  HSR Layout
                  <br /> Bengaluru <br />
                  Karnataka 560102
                </p>
              </div>
            </section>

            <nav className="flex gap-4">
              <a
                href="https://www.facebook.com/SalesCaptainHQ/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f bg-blue-900 text-white p-3 px-4 rounded-lg"></i>
              </a>

              <a href="https://twitter.com/SalesCaptainInc" target="_blank">
                <i className="fa-brands fa-twitter bg-cyan-500 text-white p-3 rounded-lg"></i>
              </a>

              <a
                href="https://www.instagram.com/salescaptainhq/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram bg-pink-400 text-white p-3 rounded-lg"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/salescaptainhq/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in bg-blue-600 text-white p-3 rounded-lg"></i>
              </a>
            </nav>
          </article>
        </nav>
      </section>
      <div className="flex flex-col items-center justify-center  gap-2">
        <hr className="w-2/3 self-center mt-8 bg-blue-600" />
        <h1 className="text-center self-center mt-4">
          Copyright ©2023 | Made by kaushiK
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
