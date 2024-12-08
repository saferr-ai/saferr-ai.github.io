import React from "react";
import { newsData } from "@/constants/news";


const Top2News = () => {
    const top2News = newsData.slice(0, 2);

    return (

        <div className=" bg-[#cedbdb]">


            <div className="max-w-6xl mx-auto px-4 py-6   relative ">

                <div className="flex flex-col lg:flex-row " >

                    <div className="md:w-1/3  w-auto block my-4">
                        <h1 className="text-4xl font-bold text-foreground">Latest News </h1>
                    </div>

                    <div className="md:w-2/3 w-auto block">
                        {top2News.map((news, index) => (
                            <div key={index} className="mb-4 p-4 border border-black rounded shadow">
                                <div className=" flex flex-col ">
                                    <div className="">
                                        <h2 className="text-xl font-bold text-foreground">{news.title}</h2>
                                    </div>
                                    <div className="">
                                        <p className="text-sm text-foreground my-4">{news.date} {'\u00B7'} {news.category}</p>
                                        {news.href && (
                                            <a href={news.href} className="text-background bg-foreground  py-2 px-4 rounded-full mt-4 hover:underline">
                                                Read more
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Top2News;