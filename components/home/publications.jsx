"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { conferences } from "@/constants/publications";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }, // Stagger effect for children (cards)
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


export const PublicationCard = ({ publication }) => {
    return (
        <div className="min-w-0 shrink-0 grow-0 pl-2 basis-full sm:basis-4/5 md:basis-3/5 lg:basis-[40%] md:ml-32 h-96 md:h-72">
            <div className="text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 rounded-2xl border border-gray-300 h-full overflow-hidden bg-white">
                <div className=" py-8 px-6 md:px-10 h-full flex flex-col justify-between">
                    <div className="space-y-4 md:space-y-2 overflow-hidden">
                        {/* Publication Title */}
                        <h2 className="text-[22px] font-bold md:font-semibold leading-tight text-black tracking-tight">
                            {publication.title}
                        </h2>

                        {/* Authors List */}
                        <div className="text-[#0E4022] text-[14px] overflow-hidden text-ellipsis">

                            {publication.authors.map((author, index) => (
                                <span key={index} className="underline italic cursor-pointer">{author}, </span>
                            ))}
                        </div>

                        {/* Tags (Vision Model, ICASSP, NeurIPS) */}
                        <div className="flex flex-wrap leading-tight gap-1 md:gap-2">
                            {publication.tags.map((tag, index) => (
                                <span key={index} className="inline-flex items-center md:mt-3 gap-2 px-4 py-1.5 rounded-lg text-sm font-extrabold bg-[#f7f8f8]">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Publication Button */}
                    <div className="mt-6 flex justify-start">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 hover:bg-gray-200 px-6 py-2.5 tracking-tight text-black font-extrabold rounded-full bg-[#39864A29] gap-2"><Link href="https://neurips.cc/virtual/2024/106643" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Visit Publication
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        </button>



                    </div>
                </div>
            </div>
        </div>
    );
};




// const PublicationCard = ({ publication }) => {

//     return (
//         <Card className="min-w-0 shrink-0 grow-0 pl-4 basis-full sm:basis-4/5 md:basis-1/2 lg:basis-[40%] md:ml-32">
//             <CardHeader>
//                 <CardTitle className="text-[22px] font-bold md:font-semibold leading-tight text-black tracking-tight">
//                     {publication.title}
//                 </CardTitle>
//                 <CardDescription>
//                     {publication.authors.map((author, index) => (
//                         <span key={index}>{author}</span>
//                     ))}
//                 </CardDescription>
//                 <CardContent>
//                     {publication.tags.map((tag, index) => (
//                         <span key={index}>{tag}</span>
//                     ))}
//                     <Link href={publication.href} target="_blank" rel="noopener noreferrer">
//                         Visit Publication
//                         <ArrowUpRight className="w-4 h-4" />
//                     </Link>

//                 </CardContent>
//             </CardHeader>
//         </Card>
//     )
// }


export function Publications() {




    const top5Conferences = conferences.slice(0, 5);
    return (
        <motion.section
            className="bg-primary-lighter p-12 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Heading Animation */}
            <motion.div className="container mx-auto p-8 max-w-7xl" variants={headingVariants}>
                <h2 className="text-5xl font-bold mb-8">
                    Publications
                </h2>
                <p className="text-lg text-muted-foreground">
                    Here are some of our publications.
                </p>
            </motion.div>

            <Carousel opts={{
                align: "start",
            }}
                className="w-full max-w-7xl">
                <CarouselContent>
                    {top5Conferences.map((publication, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-3/5" >
                            <PublicationCard publication={publication} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-end mt-4 items-end relative">
                    <div className="flex  absolute  -bottom-16 right-0 -translate-x-1/2 -translate-y-1/2">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
            </Carousel>
        </motion.section>
    );
}