import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
const Navbar = () => {

  const [menuButton, setMenuButton] = useState(false)
  const [click, setClick] = useState(false)
  const [menuClicked, setMenuClicked] = useState(false)

  const showMenuButton = () => {
    if (window.innerWidth > 768) setMenuButton(false);
    else setMenuButton(true);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      document.querySelector(".navbar").style.backgroundColor = "#e7f2fc";
    } else {
      document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    changeNavbarColor();

    window.addEventListener("resize", showMenuButton);
    showMenuButton();
  }, []);

  const handleClick = () => {
    setClick((prev) => !prev);
      
  };

  const menuProductArray = [
    {
      name: "Review",
      desc: "Improve Your online presence.",
    },
    {
      name: "Website Chat",
      desc: "Turn web traffic into sales.",
    },
    {
      name: "Text marketing",
      desc: "Growth with text campaign.",
    },
    {
      name: "Phones",
      desc: "Make & recieve calls.",
    },
    {
      name: "Inbox",
      desc: "Manage all messages in one place.",
    },
    {
      name: "Payment",
      desc: "Payment solutions cateored for you.",
    },
  ];

  const menuIndustryArray = [
    {
      name: "Healthcare",
      desc: "Improve Your online presence.",
    },
    {
      name: "Dental",
      desc: "Turn web traffic into sales.",
    },
    {
      name: "Home Services",
      desc: "Growth with text campaign.",
    },
    {
      name: "Retail",
      desc: "Make & recieve calls.",
    },
    {
      name: "Hospitality",
      desc: "Manage all messages in one place.",
    },
    {
      name: "Automotive",
      desc: "Payment solutions cateored for you.",
    },
    {
      name: "Restaurants",
      desc: "Payment solutions cateored for you.",
    },
    {
      name: "Wellness",
      desc: "Payment solutions cateored for you.",
    },
    {
      name: "Professional Services",
      desc: "Payment solutions cateored for you.",
    },
    {
      name: "Care Services",
      desc: "Payment solutions cateored for you.",
    },
    {
      name: "Financial Services",
      desc: "Payment solutions cateored for you.",
    },
    {
      name: "Recreational Services",
      desc: "Payment solutions cateored for you.",
    },
  ];

  const menuResourceArray = [
    "Blogs & Guides",
    "Customer Stories",
    "Free Tools",
    "What's New?",
    "Referral Program",
    "Agencies & Partners",
  ];
  const menuSupportArray = [
    "Help Center",
    "Chat with us",
    "Email Us",
  ];

  console.log(menuClicked)
  return (
    <main className="navbar bg-transparent sticky top-0 z-50 w-screen">
      <nav className="flex justify-between xs:p-4 md:p-8 ">
        <img src="logo.png" alt="logo" width="220px" className="xs:w-26 xs:h-10 md:w-40" />
        <ul id="menuToggle" className={`flex xs:flex-col md:flex-row ul justify-between gap-10 m-auto
        xs:bg-white xs:p-4 xs:rounded-lg md:bg-transparent md:p-0 xs:text-xl xs:font-bold md:font-normal
         xs:absolute md:static xs:my-16 md:my-0 z-100 md:flex
         ${click?'block top-0 right-10 w-60 h-fit gap-4':'hidden'}`}>
          <li className="text-xl">
            <a href="#">Home</a>
          </li>
          <li className="text-xl group">
            <a href="#" onClick={()=>setMenuClicked(prev=>!prev)}>Products</a>
            <aside className={`hidden group-hover:block hover:block  md:bg-white bg-opacity-100 
            py-4 px-8  absolute rounded-lg
            ${menuClicked &&'xs:bg-white'}
            
            `}>
              {menuProductArray.map((product, index) => (
                <a href="#" className={`flex flex-col my-2 hover:border-y-2
                ${menuClicked?'xs:block ':'xs:hidden md:block'}
                `} key={index}>
                  <p className="xs:text-sm md:text-lg font-semibold">
                    {product.name}
                    <br />
                    <span className="xs:hidden  text-gray-500 ">
                      {product.desc}
                    </span>
                  </p>
                </a>
              ))}
            </aside>
          </li>
          <li className="text-xl group">
            <a href="#" onClick={()=>setMenuClicked(prev=>!prev)}>Industries</a>
            <aside className={`hidden group-hover:block hover:block  
            md:bg-white bg-opacity-100 py-4  px-8  absolute rounded-lg
            ${menuClicked &&'xs:bg-white'}`}>
              {menuIndustryArray.map((industry, index) => (
                <a href="#" className={`flex flex-col my-2 hover:border-y-2
                ${menuClicked?'xs:block ':'xs:hidden md:block'}`} key={index}>
                  <p className="font-semibold xs:text-sm md:text-lg my-1" >
                    {industry.name}
                    <br />
                  </p>
                </a>
              ))}
            </aside>
          </li>
          <li className="text-xl">
            <a href="#">Pricing</a>
          </li>
          <li className="text-xl group">
            <a href="#" onClick={()=>setMenuClicked(prev=>!prev)}>Resources</a>
            <aside className={`hidden group-hover:block hover:block  
            md:bg-white bg-opacity-100 py-4 px-8 absolute rounded-lg
            ${menuClicked &&'xs:bg-white'}`}>
              {menuResourceArray.map((resource, index) => (
                <a href="#" className={`flex flex-col my-2 hover:border-y-2
                ${menuClicked?'xs:block ':'xs:hidden md:block'}`} key={index}>
                  <p className="font-semibold xs:text-sm md:text-lg w-full">
                    {resource}
                    <br />
                  </p>
                </a>
              ))}
            </aside>
          </li>
          <li className="text-xl group">
            <a href="#" onClick={()=>setMenuClicked(prev=>!prev)}>Support</a>
            <aside className={`hidden group-hover:block hover:block  
            md:bg-white bg-opacity-100 py-4 px-8  
            absolute rounded-lg
            ${menuClicked &&'xs:bg-white'}`}>
              {menuSupportArray.map((support, index) => (
                <a href="#" className={`flex flex-col my-2 hover:border-y-2
                ${menuClicked?'xs:block ':'xs:hidden md:block'}`} key={index}>
                  <p className="font-semibold xs:text-sm md:text-lg">
                    {support}
                    <br />
                  </p>
                </a>
              ))}
            </aside>
          </li>
        </ul>

        {!menuButton &&<aside className="flex gap-4">
          <Link to="/login">
            <button
              className="bg-black text-white p-2 rounded-lg cursor-pointer
                hover:bg-white hover:text-black"
            >
              Sign In
            </button>
          </Link>
          <button
            className="bg-white text-blue-500 p-2 rounded-lg cursor-pointer
                hover:bg-blue-500 hover:text-white"
          >
            Get Started
          </button>
        </aside>}

        {menuButton && (
          <div className="relative flex items-center justify-center">
            {click ? (<RxCross2
              className="text-4xl"
              onClick={handleClick}
              />
              
            ) : (<BiMenuAltRight className="text-4xl"  onClick={handleClick} />
              
            )}
          </div>
        )}
      </nav>
    </main>
  );
};

export default Navbar;
