'use client'

import React, { useState } from 'react'
import { RevealDown } from "./utils/RevealDown";
import { ChevronDownIcon} from "@heroicons/react/16/solid";
import NavbarLogo from "./NavbarLogo";
import DropDownMenu from './DropDownMenu';
import { ChevronUpIcon } from '@heroicons/react/16/solid';



const Header = () => {

    const [open, setOpen] = useState(false);

  return (
    
    <div className="flex justify-between items-center w-full h-[75px] bg-white pl-10 pr-10 max-md:pl-4 max-md:pr-4">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <RevealDown>
        <div className="flex gap-6 items-center justify-start text-primary_green max-md:">
          <h2>Home</h2>
          <h2>Borrow</h2>
          <h2>Invest</h2>
          <div className='flex flex-col items-center gap-5 h-full'>
            <div className="flex gap-1 items-center justify-start" onClick={() => setOpen((prev) => !prev)}>
                <h2>About Us</h2>
                {open? <ChevronUpIcon className="size-6"/> : <ChevronDownIcon className="size-6"/>}
            </div>
            <DropDownMenu open={open}/>
          </div>
        </div>
        </RevealDown>
        
      
        <NavbarLogo/>

        <RevealDown>
        <div className="flex gap-5 max-lg:collapse">
          <button className="flex w-[120px] h-[50px] bg-primary_green items-center justify-center rounded-md text-white font-bold hover:bg-primary_green_highlight max-lg:w-1">
              <h4 className="">Login</h4>
          </button>

          <button className="flex w-[120px] h-[50px] border-2 border-primary_green items-center justify-center rounded-md text-primary_green font-bold hover:bg-primary_green_highlight hover:text-white max-lg:w-1">
              <h4 className="">Signup</h4>
          </button>
        </div>
        </RevealDown>
      </div>
  )
}

export default Header