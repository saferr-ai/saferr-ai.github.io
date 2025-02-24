"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({ children,
    className,
    variant,
    duration = 1,
    delay = 0,
}) => {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <motion.div
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration, delay }}
            viewport={{ once: true }}
            variants={combinedVariants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

export default BlurIn;