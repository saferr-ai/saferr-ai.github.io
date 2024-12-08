import React from "react";
import { newsData } from "@/constants/news";

export default function News() {
    return (
        <div className="bg-background relative">
            <div className="w-screen h-20"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Latest News & Updates</h1>
                
                {/* Timeline */}
                <div className="relative flex justify-center">
                    {/* Timeline line */}
                    
                    
                    {/* News items */}
                    <div className="space-y-8 max-w-full sm:max-w-3xl ">
                        {newsData.map((news) => (
                            <div key={news.id} className="relative pl-6 sm:pl-[80px]">
                                {/* Timeline dot */}
                                <div className="absolute left-[-7px] sm:left-[33px] top-4 w-4 h-4 bg-background rounded-full border-4 border-[#8fa3a3]" />

                                {/* Timeline line */}
                                
                                <div className={` hidden lg:visible absolute left-0 sm:left-[40px] top-10 h-full w-1 bg-[#8fa3a3] ${
                                    newsData.indexOf(news) === newsData.length - 1 ? 'hidden' : ''
                                }`} />
                                


                                {/* Content */}
                                <div className="bg-[#cedbdb] p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-background text-foreground mb-2">
                                        {news.category}
                                    </span>
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">{news.title}</h3>
                                    <time className="text-sm text-gray-500">{news.date}</time>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}