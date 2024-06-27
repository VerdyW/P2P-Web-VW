'use client'
import React from 'react'
import { motion } from 'framer-motion'

const WhyScroll = () => {
  return (
    <div className="flex gap-10 mt-10 mb-20 w-full"> 
            <motion.div className="flex flex-col gap-5 w-1/3"
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: 0.25 }}
            >
              <img src="/assets/quick-approval.jpg" alt="" className=""/>
              <h6>Quick Approval Process</h6>
              <h5 className="text-secondary_green">Borrow money at competitive rates that won't break the bank.</h5>
            </motion.div>
            
            <motion.div className="flex flex-col gap-5 w-1/3"
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: 0.75 }}
            >
              <img src="/assets/low-interest.jpg" alt="" className=""/>
              <h6>Low Interest Rates</h6>
              <h5 className="text-secondary_green">Get approved for a loan in no time with our streamlined process.</h5>
            </motion.div>

            <motion.div className="flex flex-col gap-5 w-1/3"
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: 1.25 }}
            >
              <img src="/assets/user-friendly.jpg" alt="" className=""/>
              <h6>User-Friendly Interface</h6>
              <h5 className="text-secondary_green">Easily navigate our platform and manage your lending activities.</h5>
            </motion.div>
          </div>
  )
}

export default WhyScroll