"use client";
import { delay, motion } from "framer-motion";

export default function PillarsSection() {
  return (
    <section className="  mt-3 rounded-2xl flex flex-col justify-center items-center px-4">
      {/* Section Heading */}

      <div className="max-w-7xl mx-auto my-6">

        <motion.h2
          className="text-3xl md:text-4xl font-normal text-gray-800 mb-8 text-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1, delay : 0.6 }}
        >
        Pillars of SafeRR AI
        </motion.h2>

        {/* Cards Container */}
        <motion.div
          className="w-full max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Horizontal Scrolling on Mobile */}
          <div className="grid   grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto   ">
            {/* Safety Card */}
            <motion.div
              className="bg-background shadow-md rounded-2xl p-6 flex flex-col items-center     w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-normal text-gray-700 mb-4">Safety</h3>
              <p className="text-gray-600 text-center">
                Ensuring that AI systems operate without causing harm, prioritize
                ethical decision-making, and safeguard user data and privacy.
              </p>
            </motion.div>

            {/* Reliability Card */}
            <motion.div
              className="bg-background shadow-md rounded-2xl p-6 flex flex-col items-center   w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-normal text-gray-700 mb-4">Reliability</h3>
              <p className="text-gray-600 text-center">
                Building dependable AI solutions that perform consistently under
                varying conditions and deliver predictable outcomes with accuracy.
              </p>
            </motion.div>

            {/* Robustness Card */}
            <motion.div
              className="bg-background shadow-md rounded-2xl p-6 flex flex-col items-center  w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-normal text-gray-700 mb-4">Robustness</h3>
              <p className="text-gray-600 text-center">
                Designing AI systems resilient to adversarial inputs, capable of
                handling uncertainty, and adaptable to diverse environments.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
