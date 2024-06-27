import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { Reveal } from "./components/utils/Reveal";
import { RevealDown } from "./components/utils/RevealDown";
import { RevealLeft } from "./components/utils/RevealLeft";
import { RevealRight } from "./components/utils/RevealRight";
import Steps from "./components/Steps";
import NavbarLogo from "./components/NavbarLogo";
import WhyScroll from "./components/WhyScroll";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="flex justify-between items-center w-full h-[75px] bg-white pl-10 pr-10">
        <RevealDown>
        <div className="flex gap-6 items-center justify-start text-primary_green">
          <h2>Home</h2>
          <h2>Borrow</h2>
          <h2>Invest</h2>
          <div className="flex gap-1 items-center justify-start">
            <h2>About Us</h2>
            <ChevronDownIcon className="size-6"/>
          </div>
        </div>
        </RevealDown>
      
        <NavbarLogo/>

        <RevealDown>
        <div className="flex gap-5">
          <button className="flex w-[120px] h-[50px] bg-primary_green items-center justify-center rounded-md text-white font-bold hover:bg-primary_green_highlight">
              <h4 className="">Login</h4>
          </button>

          <button className="flex w-[120px] h-[50px] border-2 border-primary_green items-center justify-center rounded-md text-primary_green font-bold hover:bg-primary_green_highlight hover:text-white">
              <h4 className="">Signup</h4>
          </button>
        </div>
        </RevealDown>
      </div>

      
      <div id="Home" className="flex flex-col max-h-[800px] max-lg:max-h-[350px] max-md:max-h-[250px] w-screen items-center">
        <img className="w-full" src="image-2.jpg" alt="image-2"></img>
        
        <div className="grid grid-cols-[1.5fr_1fr] grid-rows-1 w-11/12 pt-5 pb-5 relative bottom-32 max-lg:bottom-20">
          <div className="text-primary_green font-bold">
          <Reveal>
          <h3 className="">Invest And Borrow</h3>
          </Reveal>
          <Reveal width="100%">
          <h3 className="relative left-20">Peer-To-Peer</h3>
          </Reveal>
          <Reveal width="100%">
          <h3 className="relative left-40">With Low Interest Rates</h3>
          </Reveal>
          </div>
          

          <div className="flex flex-col gap-5 justify-end items-start w-full text-primary_green font-bold">
            <div className="flex gap-10 w-full text-white font-bold">
              <Reveal>
              <button className="flex w-[120px] h-[50px] bg-primary_green items-center justify-center rounded-md hover:bg-primary_green_highlight z-10">
                <h4 className="">Start</h4>
              </button>
              </Reveal>
              <Reveal>
              <button className="flex w-[120px] h-[50px] lg:border-primary_green lg:border-2 bg-white text-primary_green items-center justify-center rounded-md z-10 hover:bg-primary_green_highlight hover:border-0 hover:text-white">
                <h4 className="">Learn More</h4>
              </button>
              </Reveal>
            </div>
            <Reveal>
            <h5>Welcome to our peer-to-peer lending platform. Join our community and start investing or borrowing today.</h5>
            </Reveal>
          </div>
        </div>
      </div>

      <div id="Why" className="flex items-center justify-center mt-20 bg-primary_green w-full h-full">
        <div className="flex flex-col justify-center items-center text-center w-11/12 text-white">
          <Reveal>
          <h3 className="font-bold mt-20">Why Choose Our Peer-to-Peer Lending Platform?</h3>
          </Reveal>
          <Reveal>
          <h5 className="mt-5 text-secondary_green">Our user-friendly interface and competitive rates set us apart from traditional lenders. <br/> Experience the convenience and affordability of peer-to-peer lending today.</h5>
          </Reveal>
          <WhyScroll/>
        </div>
      </div>

      <div id="Unlock" className="flex items-center justify-center bg-white w-full">
        <div className="grid grid-cols-2 justify-center items-center w-11/12 mt-20 mb-20 text-primary_green gap-14 font-bold">
          <RevealRight>
          <img src="/assets/low-interest.jpg" alt="" className=""/>
          </RevealRight>
          <div className="flex flex-col gap-5">
            <RevealLeft>
            <h3>Unlock the Power of Peer-to-Peer Lending</h3>
            </RevealLeft>
            <RevealLeft>
            <h5>Discover the numerous advantages of peer-to-peer lending over traditional lending methods. With our platform, you can enjoy lower interest rates, flexible terms, and a seamless borrowing experience.</h5>
            </RevealLeft>
            <div className="grid grid-cols-2 justify-center items-center mt-5">
              <RevealLeft>
              <div className="flex flex-col gap-2">
                <h6 className="font-bold">Lower Rates</h6>
                <h5>Get access to loans at significantly lower interest rates compared to traditional lenders.</h5>
              </div>
              </RevealLeft>

              <RevealLeft>
              <div className="flex flex-col gap-2">
                <h6 className="font-bold">Flexible Terms</h6>
                <h5>Enjoy the freedom to choose loan terms that suit your financial needs and goals.</h5>
              </div>
              </RevealLeft>
            </div>
            
            <RevealLeft>
            <div className="flex gap-5">
              <button className="flex w-[120px] h-[50px] bg-primary_green items-center justify-center rounded-md hover:bg-primary_green_highlight">
                <h4 className="text-white font-bold">Learn More</h4>
              </button>
              <div className="flex w-[120px] h-[50px] items-center justify-center rounded-md font-bold cursor-pointer hover:text-secondary_green">
                <h4 className="">Start</h4>
                <ChevronRightIcon className="size-6"/>
              </div>
            </div>
            </RevealLeft>
          </div>
        </div>
      </div>

      <div id="Steps" className="flex items-center justify-center bg-primary_green w-full">
        <div className="flex flex-col justify-center items-center text-center w-11/12 text-white mt-20">
          <Reveal>
          <h3>Easy Steps to Get Started</h3>
          </Reveal>
          <Reveal>
          <h5>Sign up, create a profile, start lending or borrowing</h5>
          </Reveal>
          <Steps/>
        </div>
      </div>

      <div id="Footer" className="flex items-center justify-center bg-primary_green w-full">
        <div className="flex flex-col justify-center items-center text-center w-11/12 text-white mt-24">
          <Reveal>
          <div id="Logo" className="h-20 w-20 bg-white justify-center text-primary_green font-bold items-center flex">
            <h6 className="font-bold">VW.</h6>
          </div>
          </Reveal>
          <Reveal>
          <div className="flex gap-5 mt-10 mb-14">
            <h5 className="font-bold cursor-pointer hover:text-secondary_green">Invest Now</h5>
            <h5 className="font-bold cursor-pointer hover:text-secondary_green">How It Works</h5>
            <h5 className="font-bold cursor-pointer hover:text-secondary_green">About Us</h5>
            <h5 className="font-bold cursor-pointer hover:text-secondary_green">FAQs</h5>
            <h5 className="font-bold cursor-pointer hover:text-secondary_green">Contact Us</h5>
          </div>
          </Reveal>
          <Reveal width="100%">
          <div className="border-b-white border-b-2 w-full"/>
          </Reveal>
          <Reveal width="100%">
          <div className="flex gap-5 mt-10 mb-20 w-full justify-between">
            <h5>© 2024 VW. All rights reserved.</h5>
            <div className="flex gap-5">
              <h5 className="underline cursor-pointer hover:text-secondary_green">Privacy Policy</h5>
              <h5 className="underline cursor-pointer hover:text-secondary_green">Terms and Conditions</h5>
              <h5 className="underline cursor-pointer hover:text-secondary_green">Cookie Policy</h5>
            </div>
          </div>
          </Reveal>
        </div>
      </div>


    </main>
  );
}
