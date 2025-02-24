"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const announcements = [
  {
    title: "Tutorial: How to use the Transformer Model",
    description: "In this tutorial, we will learn how to use the Transformer Model to generate text.",
    link: "/announcements/announcement-1",
    image: "https://images.unsplash.com/photo-1586282023338-52aa50a846ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Blog: How to use the Transformer Model",
    description: "In this blog, we will learn how to use the Transformer Model to generate text.",
    link: "/blogs/blog-1",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];


// **Animation Variants**
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Staggered effect
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnnouncementCard = ({ announcement }) => {
  return (
    <motion.div variants={cardVariants}>
      <Card className="overflow-hidden rounded-3xl border-none shadow-lg">
        <img
          src={announcement.image}
          alt={announcement.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-normal mb-2">{announcement.title}</h3>
          <p className="text-muted-foreground mb-4">{announcement.description}</p>
          <Link href={announcement.link}>
            <Button variant="outline" className="w-full rounded-full">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export function Announcements() {
  return (
    <motion.section
      className="py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Staggered Header Animation */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <h2 className="text-5xl font-normal mb-4"> Latest Announcements and Blogs</h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with our latest announcements and blogs
          </p>
        </motion.div>

        {/* Staggered Cards Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants} // Apply stagger animation
        >
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.title} announcement={announcement} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}