'use client'

import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const RevealRight = ({children, width = "fit-content"}: Props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView])

    return (
    <div ref={ref} style={{position: "relative", width, overflow:"hidden"}}>
        <motion.div
        variants={{
            hidden: {opacity: 0, x: -75},
            visible: {opacity: 1, x: 0}
        }}
        initial="hidden"
        animate={controls}
        transition={{duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>

    </div>
    )
}