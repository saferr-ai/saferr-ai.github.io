import React from "react";
import Image from "next/image";
import Link from "next/link";

import {  phdStudents, postDocs, visitingStudents, collaborators } from "@/constants/people";



export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">People</h1>
        </div>
    )
}