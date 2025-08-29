'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationHistory = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Amity University, Kolkata",
        period: "2022 - Present",
        location: "Kolkata, India",
        courses: "Relevant Courses: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Cloud Computing, Software Engineering, Machine Learning.",
    },
    {
        degree: "Class 12 (CBSE)",
        institution: "Kendriya Vidyalaya Cossipore",
        period: "2020 - 2021",
        location: "Kolkata, India",
        courses: "Relevant Subjects: Physics, Chemistry, Biology, Mathematics (PCBM)",
    },
    {
        degree: "Class 10 (CBSE)",
        institution: "Kendriya Vidyalaya ONGC",
        period: "2018 - 2019",
        location: "Agartala, India",
    },
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

export function EducationSection() {
    return (
        <section id="education" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Education
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        My academic background.
                    </p>
                </div>
                <div className="relative mt-12">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
                    {educationHistory.map((edu, index) => (
                        <div key={index} className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
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
                                                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                                                <div className={`${index % 2 === 0 ? '' : 'text-right'}`}>
                                                    <CardTitle>{edu.institution}</CardTitle>
                                                    <div className="text-muted-foreground">{edu.degree}</div>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className={`text-muted-foreground ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                            <p>{edu.period}</p>
                                            <p>{edu.location}</p>
                                            {edu.courses && (
                                                <p className="mt-2 text-sm">{edu.courses}</p>
                                            )}
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
