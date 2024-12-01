import React from "react";
import Image from "next/image";
import Link from "next/link";

const people = [
    {
        name: 'Avinash  Reddy',
        role: 'PhD Student',
        imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D03AQFx8_V29r38Zg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656950279720?e=1738800000&v=beta&t=ygFILvRt0ZM-Ve6-CuZjlm_EnJekfNahqjyZihXByDo',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Prashant ',
        role: 'Post Doc',
        imageUrl:
            'https://media.licdn.com/dms/image/v2/D4D03AQG1cVuJrtMdrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667656459333?e=1738800000&v=beta&t=MUBi5jpq-kGgZ3SSc8lV4BKO85ZcAGiwMPDCXhhmp2o',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Utsav Singh',
        role: 'Research Scholar',
        imageUrl:
            'https://media.licdn.com/dms/image/v2/D4E03AQE9II0AW0puqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709489137998?e=1738800000&v=beta&t=76S6S1NImpf7fxK8iJg3PVD338FFsE4pUlHNUu5StJk',
        xUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]

export default function About() {
    return (
        <div className="bg-background relative ">
            <div className="max-w-7xl mx-auto  py-36  gap-6 flex md:flex-row flex-col justify-center items-center">
                <div className="md:w-1/2 flex justify-center" >
                    <Image src={"/amritpic.jpg"} className="rounded-lg w-auto " width={300} height={300} ></Image>
                </div>

                <div className="md:w-1/2 " >
                    <h1 className="text-foreground text-4xl mb-5">
                        Principal Investigator
                    </h1>
                    <p className="text-foreground text-start mb-5">
                        Assistant Professor in the Computer Science department (joint appointment with the ECE department) at the University of Central Florida, USA.
                    </p>
                    <Link href="/amrit ">
                        <button className="text-foreground">For More Details</button>
                    </Link>
                </div>
            </div>


            <section className="bg-[#ECE3CE] py-24 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="text-center">
                        <div className="mx-auto max-w-2xl">
                            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Meet our team</h2>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                who pledged to advance Generative AI alignment, ensuring that artificial intelligence operates in harmony with human values, ethical principles, and societal well-being.
                            </p>
                        </div>
                    </div>


                    <ul
                        role="list"
                        className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <img alt="" src={person.imageUrl} className="aspect-[3/2] w-full rounded-2xl object-cover" />
                                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-base/7 text-gray-600">{person.role}</p>
                                <ul role="list" className="mt-6 flex gap-x-6">
                                    <li>
                                        <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">X</span>
                                            <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                <path
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>

                </div>

            </section>
        </div>
    )
}