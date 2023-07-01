import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showOutline, setShowOutline] = useState(false)
  return (
    <section className="flex" >
      <article className="xs:w-screen md:w-1/2 flex flex-col justify-center items-center h-screen"
      >
        <img src="loginLogo.png" alt="logo" width="300px" className="my-8"  />

        <form className="flex flex-col w-72 gap-8 my-4"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            required="#" 
            className="p-4 text-center  border-2 rounded-md outline-none"
          />
          <div className='border-2 rounded-md flex items-center justify-center gap-2'
          
          onClick={()=>setShowOutline(prev=> !prev)}>
          <input type={`${showPassword?'text':'password'}`} 
             placeholder="Enter your Password"
            required="#" 
            className="p-4 text-center outline-none"/>


          <i className={showPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"} id="togglePassword"
          onClick={()=> setShowPassword(prev=> !prev)}></i>
          </div>
            
  
            
          <button className="p-4 bg-blue-500 text-gray-200 text-lg font-semibold rounded-md hover:bg-white hover:text-blue-500">
            Next
          </button>
        </form>

        <article>
          <a
            class="flex items-center justify-center gap-4 border p-4 w-72 my-2 rounded-sm"
            href="#"
          >
            <img
              width="20px"
              alt="Google login"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
            Sign in with Google
          </a>
          <a
            class="flex justify-center items-center gap-4 border p-4 w-72 my-2 rounded-sm"
            href="#"
          >
            <img
              width="20px"
              alt="Google login"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            />
            Sign in with Apple
          </a>
        </article>
      </article>

      <article className="h-screen absolute right-0 w-1/2 xs:hidden md:block">

        <Carousel autoPlay infiniteLoop>
        <div className="bg-gray-200 flex flex-col items-center justify-center h-screen ">
          <img src="loginPagePic1.svg" alt="banner" className="loginBanner" />
          <h1 className="text-5xl font-bold p-4 text-center">Turn more customer calls into revenue.</h1>
          <p className="text-xl font-medium break-words">Capture every caller with Podium Phones,<br/> 
          a VOIP system for your small business.</p>
          <button className="p-4 text-xl text-white bg-blue-500 rounded-md my-2 hover:text-blue-500 hover:bg-gray-300">Learn more</button>
        </div>

        <div className="bg-gray-200 flex flex-col items-center justify-center h-full">
          <img src="loginPagePic2.png" alt="logoBanner" className="loginBanner2" />
          <h1 className="text-5xl font-bold text-center">Give your business a
SalesCaptain Upgrade</h1>
          <p className="text-xl font-medium break-words p-4">Our AI-powered tools help local businesses modernize how they communicate with their customers by facilitating online reviews, personalized marketing campaigns, web chats, payments, and more.</p>
          <button className="p-4 text-white bg-blue-500 rounded-md my-2  hover:bg-gray-300">Learn more</button>
       
        </div>

        </Carousel>
        
      </article>
    </section>
  );
};

export default Login;
