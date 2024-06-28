'use client'

import React from 'react'
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'


const Steps = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-10 mt-14 h-[400px] w-full mb-20 max-lg:grid-cols-1 max-lg:grid-rows-3 max-lg:h-full">
            <motion.div
                className="flex flex-col gap-5 w-full border-2 border-white text-start justify-between p-10 max-lg:h-full "
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex flex-col gap-2">  
                <PresentationChartLineIcon className="size-20"/>
                <h6 className="font-bold">Start Lending</h6>
                <h5>Once approved, start lending or borrowing with low interest rates</h5>
              </div>
              <div className="flex gap-5">
                <button className="flex w-[120px] h-[50px] bg-white items-center justify-center rounded-md hover:bg-secondary_green">
                  <h4 className="text-primary_green font-bold">Join</h4>
                </button>
                <div className="flex w-[120px] h-[50px] items-center justify-center rounded-md font-bold cursor-pointer hover:text-secondary_green">
                  <h4 className="">Learn More</h4>
                  <ChevronRightIcon className="size-6"/>
                </div>
              </div>
            </motion.div>

            <motion.div className="flex flex-col gap-5 w-full border-2 border-white text-start justify-between p-10 max-lg:h-full"
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: 0.75 }}
            >
              <div className="flex flex-col gap-2">
                <CurrencyDollarIcon className="size-20"/>
                <h6 className="font-bold">Streamlined lending for borrowers and lenders</h6>
                <h5>Browse Loan Offers</h5>
              </div>
              <div className="flex items-center justify-start rounded-md font-bold cursor-pointer hover:text-secondary_green">
                <h4 className="">Learn More</h4>
                <ChevronRightIcon className="size-6"/>
              </div>
            </motion.div>

            <motion.div className="flex flex-col gap-5 w-full border-2 border-white text-start justify-between p-10 max-lg:h-full"
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: 1.25 }}
            >
              <div className="flex flex-col gap-2">
                <UserPlusIcon className="size-20"/>  
                <h6 className="font-bold">Sign Up and Create a Profile</h6>
                <h5>Start Borrowing or Lending</h5>
              </div>
              <div className="flex items-center justify-start rounded-md font-bold cursor-pointer hover:text-secondary_green">
                <h4 className="">Sign Up</h4>
                <ChevronRightIcon className="size-6"/>
              </div>
            </motion.div>
          </div>
  )
}

export default Steps