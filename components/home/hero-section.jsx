"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export function HeroSection() {
    return (
        <section className=" flex items-center relative">
            <div className="w-full ">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative  overflow-hidden shadow-2xl">
                        <Image
                            src="/hero.jpg"
                            alt="Abstract Design"
                            width={1920}
                            height={1080}

                            className=" w-full h-[500px] lg:h-auto lg:max-h-[700px] object-cover scale-x-[-1]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 text-gray-900 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center"
                    >
                        <div>
                            <p>
                                Welcome to
                            </p>
                            <h1 className="text-3xl md:text-5xl lg:text-7xl mb-6 leading-tight tracking-tight font-bold">
                                SafeRR AI Lab
                            </h1>
                            <p className="text-xl mb-8 text-white leading-relaxed">
                                Pioneering research in aligning generative AI models for safety, reliability, and robustness—committed to shaping AI for a better and more human-centric future.
                            </p>
                            <div className="space-x-2">
                                <Link href="/research">
                                    <Button
                                        size="lg"
                                        className="text-lg bg-white text-black hover:text-white rounded-full flex items-center group"
                                    >
                                        Explore Our Research
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                                    </Button>
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}




