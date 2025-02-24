"use client";
import {motion} from "framer-motion";
import NumberTicker from "../animations/number-ticker";
import FadeIn from "../animations/fade-in";


export function StatsSection() {
    return (
        <section className="py-12 bg-primary-lighter">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Our Impact</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { number: 150, label: "Conference Papers" },
            { number: 30, label: "Journal Papers" },
            { number: 50, label: "Collaborators" },
          ].map((stat, index) => (
            <FadeIn
              key={index}
              className="text-center p-8 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm"
              delay={index * 0.2}
            >
              <h3 className="text-5xl font-bold mb-4 text-primary-light">
                <NumberTicker value={stat.number} />+
              </h3>
            <p className="text-xl text-muted-foreground">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
    )
}