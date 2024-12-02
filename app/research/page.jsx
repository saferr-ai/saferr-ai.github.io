import React from "react";

export default function Research() {
    return (
        <div>
            <div className="w-screen h-16 bg-slate-600"></div>

            <div class="max-w-7xl mx-auto h-auto bg-background rounded-2xl py-10 px-5 gap-2 flex flex-col md:flex-row justify-start items-center">

                <div class="md:w-1/2 w-full h-64  md:h-96 bg-white rounded-xl shadow-lg p-6">
                    <h2 class="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                        Main Research News Heading
                    </h2>
                    <p class="text-gray-600 text-base md:text-lg">
                        A brief description of the main research topic or an introductory sentence to grab attention.
                    </p>
                </div>

                <div class="md:w-1/2 w-full flex flex-row   md:flex-col gap-2">
                    <div class="bg-white  h-48 rounded-xl shadow-lg p-4">
                        <h3 class="text-lg md:text-xl font-semibold text-gray-800">
                            Research News Heading 1
                        </h3>
                        <p class="text-gray-600 text-sm md:text-base">
                            Brief details about the research news.
                        </p>
                    </div>
                    <div class="bg-white h-48 rounded-xl shadow-lg p-4">
                        <h3 class="text-lg md:text-xl font-semibold text-gray-800">
                            Research News Heading 2
                        </h3>
                        <p class="text-gray-600 text-sm md:text-base">
                            Brief details about the research news.
                        </p>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto bg-background rounded-2xl py-10 px-5 gap-6">
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Publications</h2>

                <div class="grid grid-cols-1   gap-6">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">
                            Publication Title 1
                        </h3>
                        <p class="text-gray-600 text-sm mb-4">
                            Author(s): Author A, Author B, Author C <br/>
                                Published: Year, Journal/Conference
                        </p>
                        <a href="https://arxiv.org/pdf/XXXX.XXXX.pdf" target="_blank"
                            class="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                            View PDF on arXiv
                        </a>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">
                            Publication Title 2
                        </h3>
                        <p class="text-gray-600 text-sm mb-4">
                            Author(s): Author D, Author E <br/>
                                Published: Year, Journal/Conference
                        </p>
                        <a href="https://arxiv.org/pdf/XXXX.XXXX.pdf" target="_blank"
                            class="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                            View PDF on arXiv
                        </a>
                    </div>

                </div>
            </div>



        </div>
    )
}