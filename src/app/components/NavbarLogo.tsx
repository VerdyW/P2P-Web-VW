'use client'
import React from 'react'
import { motion } from 'framer-motion'

const NavbarLogo = () => {
  return (
        <motion.div id="Logo" className="absolute left-[50%] h-12 w-12 bg-[#363638] justify-center text-white font-bold items-center flex"
        variants={{
            hidden: {opacity: 0, y: -75},
            visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h5 className="font-bold">VW.</h5>
        </motion.div>
  )
}

export default NavbarLogo