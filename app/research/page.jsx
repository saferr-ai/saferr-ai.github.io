"use client";
import React from "react";
import { useState } from "react";
import { conferences, journals } from "@/constants/publications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Research() {


    const tabs = [
        { name: "Conferences", content: conferences },
        { name: "Journals", content: journals }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].name);


    return (
        <div>
            <div className="w-screen h-16 bg-slate-600"></div>

            {/* <div class="max-w-7xl mx-auto h-auto bg-background rounded-2xl py-10 px-5 gap-2 flex flex-col md:flex-row justify-start items-center">

                <div class="md:w-1/2 w-full h-64  md:h-96 bg-[#cedbdb] rounded-xl shadow-sm p-6">
                    <h2 class="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                        Main Research News Heading
                    </h2>
                    <p class="text-gray-600 text-base md:text-lg">
                        A brief description of the main research topic or an introductory sentence to grab attention.
                    </p>
                </div>

                <div class="md:w-1/2 w-full flex flex-row   md:flex-col gap-2">
                    <div class="bg-[#cedbdb]  h-48 rounded-xl shadow-sm p-4">
                        <h3 class="text-lg md:text-xl font-semibold text-gray-800">
                            Research News Heading 1
                        </h3>
                        <p class="text-gray-600 text-sm md:text-base">
                            Brief details about the research news.
                        </p>
                    </div>
                    <div class="bg-[#cedbdb] h-48 rounded-xl shadow-sm p-4">
                        <h3 class="text-lg md:text-xl font-semibold text-gray-800">
                            Research News Heading 2
                        </h3>
                        <p class="text-gray-600 text-sm md:text-base">
                            Brief details about the research news.
                        </p>
                    </div>
                </div>
            </div> */}

            <div class="max-w-7xl mx-auto bg-background rounded-2xl py-10 px-5 gap-6">



                <h1 class="text-2xl font-bold text-gray-800 mb-6">Publications</h1>


                <Tabs defaultValue="conferences" className="  h-24">
                    <TabsList>
                        <TabsTrigger
                            value="conferences"
                            className="px-6 py-3 text-xl font-semibold"
                        >
                            Conferences
                        </TabsTrigger>
                        <TabsTrigger
                            value="journals"
                            className="px-6 py-3 text-xl font-semibold ">
                            Journals
                        </TabsTrigger>
                    </TabsList>



                    <TabsContent value="conferences">
                        {conferences.map((conference, index) => (
                            <div key={index} class="grid grid-cols-1 py-3 gap-6">
                                <div class="bg-[#cedbdb] rounded-xl shadow-sm p-6">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                                        {conference.title}
                                    </h3>
                                    <p class="text-gray-700 text-md ">
                                        Author(s): {conference.authors.map((author, index) => (
                                            <span key={index} className={author.includes("Bedi") ? "font-bold text-gray-900" : ""}>
                                                {author}{index < conference.authors.length - 1 ? ", " : ""}
                                            </span>
                                        ))} <br />
                                        Published at :  {conference.location}, {conference.time}.
                                    </p>

                                    <a
                                        href={conference.href}
                                        className="inline-block px-6 py-2 mt-2 border border-transparent text-base font-medium rounded-md text-background bg-foreground"
                                    >
                                        Link to Publication
                                    </a>
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="journals">
                        {journals.map((journal, index) => (
                            <div key={index} class="grid grid-cols-1 py-3 gap-6">
                                <div class="bg-[#cedbdb] rounded-xl shadow-sm p-6">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                                        {journal.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Author(s): {journal.authors.map((author, index) => (
                                            <span key={index} className={author.includes("Bedi") ? "font-bold" : ""}>
                                                {author}{index < journal.authors.length - 1 ? ", " : ""}
                                            </span>
                                        ))} <br />
                                        Published: {journal.time}, {journal.location}
                                    </p>

                                    <a
                                        href={journal.href}
                                        className="inline-block px-6 py-2 mt-2 border border-transparent text-base font-medium rounded-md text-background bg-foreground"
                                    >
                                        Link to Publication
                                    </a>
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                </Tabs>
            </div>





        </div>
    )
}