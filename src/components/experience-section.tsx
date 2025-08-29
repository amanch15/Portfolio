'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        title: "C# Developer Intern",
        company: "The Techie Indians",
        date: "June 2025 - Aug 2025",
        description: "Gained experience in C# development within a professional team environment.",
        skills: ["C#"],
        image: "https://i.ibb.co/6gZ3GzQ/The-Techie-Indians.png",
    },
    {
        title: "Front-end Developer Intern",
        company: "Botfixed Automation",
        date: "July 2025 - Aug 2025",
        description: "Worked on front-end development tasks, enhancing user interfaces and experience.",
        skills: ["HTML", "CSS", "JavaScript"]
    }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ExperienceSection() {
    return (
        <section id="experience" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Internship Experience
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        My professional journey and accomplishments.
                    </p>
                </div>
                <div className="relative mt-12">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={cardVariants}
                                    className="w-full"
                                >
                                    <Card className="transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                                        <CardHeader>
                                            <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                                {exp.image ? (
                                                    <Image src={exp.image} alt={`${exp.company} logo`} width={40} height={40} className="rounded-full" />
                                                ) : (
                                                    <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                                                )}
                                                <div className={`${index % 2 === 0 ? '' : 'text-right'}`}>
                                                    <CardTitle>{exp.title}</CardTitle>
                                                    <div className="text-muted-foreground">{exp.company} - <Badge variant="secondary">{exp.date}</Badge></div>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground text-left">{exp.description}</p>
                                            <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                                {exp.skills.map((skill) => (
                                                    <Badge key={skill} variant="outline">{skill}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
