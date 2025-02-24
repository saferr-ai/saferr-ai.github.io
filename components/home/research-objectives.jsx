"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SafeIcon, EducationIcon, DefenseIcon, RobotIcon, AIAgentIcon, AlignmentIcon } from "@/components/Icons";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }, // Stagger effect for children (cards)
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const researchObjectives = [
    {
        title: "Alignment of Generative AI",
        description: "Developing methods to align generative AI models with human values and objectives, ensuring they produce safe, interpretable, and reliable outputs.",
        image: "/hero/align-ai.jpg",
        bgColor: "bg-[#7CCAA3]",
        textColor: "text-[#212121]",
        icon: <AlignmentIcon />
    },
    {
        title: "Safe Usage of Generative AI",
        description: "Establishing frameworks and methodologies to ensure the responsible and secure deployment of generative AI, mitigating risks associated with misuse and bias.",
        image: "/hero/safe-usage.webp",
        bgColor: "bg-[#0A0A0A]",
        textColor: "text-[#FCFCFC]",
        icon: <SafeIcon />
    },
    {
        title: "AI Agents for  Process Automation",
        description: "Building intelligent AI agents that can automate complex  processes, improving efficiency in areas such as   operations and decision-making.",
        image: "/hero/ai-agents.webp",
        bgColor: "bg-[#C49DF5]",
        textColor: "text-[#212121]",
        icon: <AIAgentIcon />
    },
    {
        title: "Defense-Specific AI",
        description: "Developing AI solutions tailored for defense applications, acknowledging that general AI is not plug-and-play for defense scenarios, with a focus on security, adaptability, and reliability.",
        image: "/hero/defense-ai.webp",
        bgColor: "bg-[#FAFD9F]",
        textColor: "text-[#212121]",
        icon: <DefenseIcon />
    },
    {
        title: "AI for Education",
        description: "Leveraging AI to enhance learning and teaching experiences, personalizing education, and improving accessibility for students and educators.",
        image: "/hero/ai-education.webp",
        bgColor: "bg-[#F5C49D]",
        textColor: "text-[#212121]",
        icon: <EducationIcon />
    },
    {
        title: "Human-AI Collaboration",
        description: "Exploring methods to enhance collaboration between humans and AI systems, ensuring AI serves as an effective assistant rather than a replacement, particularly in high-stakes decision-making scenarios.",
        image: "/hero/human-ai.webp",
        bgColor: "bg-[#A6A6A6]",
        textColor: "text-[#212121]",
        icon: <RobotIcon />
    },
];

export function ResearchObjectives() {
    return (
        <motion.section
            className="bg-background p-12 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Heading Animation */}
            <motion.div className="container mx-auto p-4" variants={headingVariants}>
                <h2 className="text-5xl font-bold mb-8">
                    Our Research <br /> Objectives
                </h2>
            </motion.div>

            {/* Staggered Cards */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                {researchObjectives.map((objective) => (
                    <motion.div key={objective.title} variants={cardVariants}>
                        <Card className={`relative overflow-hidden ${objective.bgColor}`}>
                            <div className="relative flex flex-col justify-between h-64 md:h-72">
                                <div className="p-8">
                                {objective.icon && React.cloneElement(objective.icon, { className: `w-10 h-10 ${objective.textColor}` })}
                                    <h3 className={`text-xl mt-8 ${objective.textColor} font-bold`}>{objective.title}</h3>
                                    <p className={` mt-2 tracking-tight ${objective.textColor} opacity-60`}>{objective.description}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}