import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Tech Solutions Inc.",
        date: "Summer 2024",
        description: "Developed and maintained web applications using Next.js and TypeScript. Collaborated with a team of developers to implement new features and resolve bugs, contributing to a 15% improvement in application performance.",
        skills: ["Next.js", "TypeScript", "React", "Node.js"]
    },
    {
        title: "Web Developer Intern",
        company: "Creative Minds Agency",
        date: "Summer 2023",
        description: "Assisted in building responsive and user-friendly websites for various clients. Gained hands-on experience with modern front-end frameworks and tools, and contributed to the successful launch of three client projects.",
        skills: ["HTML", "CSS", "JavaScript", "Firebase"]
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Work Experience
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        My professional journey and accomplishments.
                    </p>
                </div>
                <div className="relative mt-12">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8 text-right'}`}>
                                <Card className="transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                                            <div>
                                                <CardTitle>{exp.title}</CardTitle>
                                                <p className="text-muted-foreground">{exp.company} - <Badge variant="secondary">{exp.date}</Badge></p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-left">{exp.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <Badge key={skill} variant="outline">{skill}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
