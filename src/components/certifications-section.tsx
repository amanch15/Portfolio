'use client';

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const certifications = [
    {
        title: "Programming with JavaScript",
        issuer: "Coursera",
        date: "2024",
        url: "https://coursera.org/share/5650dfc131511723f0879097325fd15b",
    },
    {
        title: "Version Control",
        issuer: "Coursera",
        date: "2024",
        url: "https://coursera.org/share/fa5ab42eef894b3ab38920948736f896",
    },
    {
        title: "Angular",
        issuer: "Infosys",
        date: "2025",
        url: "#",
    },
    {
        title: "Angular Web Development",
        issuer: "Infosys",
        date: "2025",
        url: "#",
    },
    {
        title: "Oracle Cloud Infrastructure",
        issuer: "Oracle",
        date: "2025",
        url: "#",
    },
    {
        title: "HTML",
        issuer: "Web Development Course",
        date: "2025",
        url: "#",
    },
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
                            <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                                <Card className="h-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <Award className="h-8 w-8 text-primary flex-shrink-0" />
                                            <div>
                                                <CardTitle>{cert.title}</CardTitle>
                                                <div className="text-muted-foreground">{cert.issuer} - <Badge variant="secondary">{cert.date}</Badge></div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
