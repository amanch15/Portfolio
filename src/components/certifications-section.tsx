'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
    {
        title: "Certified Next.js Developer",
        issuer: "Vercel",
        date: "2023",
        description: "Demonstrated proficiency in building high-performance web applications using the Next.js framework.",
    },
    {
        title: "Google Cloud Certified - Associate Cloud Engineer",
        issuer: "Google Cloud",
        date: "2023",
        description: "Showcased ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud.",
    },
     {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2022",
        description: "Completed projects to demonstrate skills in HTML and CSS for building responsive and accessible web pages.",
    }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function CertificationsSection() {
    return (
        <section id="certifications" className="w-full py-20 md:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Certifications
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        My professional certifications and achievements.
                    </p>
                </div>
                <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            custom={index}
                        >
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <Award className="h-8 w-8 text-primary flex-shrink-0" />
                                        <div>
                                            <CardTitle>{cert.title}</CardTitle>
                                            <CardDescription>{cert.issuer} - <Badge variant="secondary">{cert.date}</Badge></CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{cert.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
