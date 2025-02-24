import React from "react";

import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ResearchObjectives } from "@/components/home/research-objectives";
import { Publications } from "@/components/home/publications";
import { Announcements } from "@/components/home/announcements";

export default function Home() {
  return(
    <div className = "bg-background">
        <HeroSection/>
        <StatsSection/>
        <ResearchObjectives/>
        <Publications/>
        <Announcements/>
    </div>
  )
} 