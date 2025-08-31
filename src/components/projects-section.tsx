'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Agentic AI Tutor',
    description: "Developed an AI-powered tutoring agent that provides personalized learning experiences. This agent can answer questions, explain concepts, and adapt to the user's learning pace, leveraging generative AI to create a dynamic and interactive educational tool.",
    image: 'https://picsum.photos/600/400?random=15',
    imageHint: 'AI education',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Genkit', 'AI', 'Next.js', 'React'],
  },
  {
    title: 'Personal Portfolio',
    description: 'Designed and developed this personal portfolio website to showcase my skills, projects, and experience. Built with Next.js, React, Tailwind CSS, and ShadCN UI for a modern, responsive, and visually appealing presentation.',
    image: 'https://picsum.photos/600/400?random=10',
    imageHint: 'portfolio website design',
    liveUrl: '#',
    repoUrl: 'https://github.com/amanch15/portfolio',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI'],
  },
  {
    title: 'Currency Converter',
    description: 'A web application that allows users to convert between different currencies using real-time exchange rates. Built with a focus on usability and a clean interface.',
    image: 'https://picsum.photos/600/400?random=11',
    imageHint: 'currency exchange money',
    liveUrl: '#',
    repoUrl: 'https://github.com/amanch15/Currency-Converter',
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
  },
  {
    title: 'Amazon Clone',
    description: 'Designed and developed a responsive Amazon clone using HTML and CSS, accurately replicating the homepage layout, navigation bar, product sections, and footer. Focused on clean code, responsive design principles, and pixel-perfect UI/UX.',
    image: 'https://picsum.photos/600/400?random=12',
    imageHint: 'online shopping interface',
    liveUrl: '#',
    repoUrl: 'https://github.com/amanch15/Amazon_clone',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'Rock Paper Scissors Game',
    description: 'Built an interactive Rock Paper Scissors game using HTML, CSS, and JavaScript, implementing dynamic gameplay logic, user interface design, and responsive animations. Focused on enhancing DOM manipulation skills and providing a smooth user experience.',
    image: 'https://picsum.photos/600/400?random=13',
    imageHint: 'game interface fun',
    liveUrl: '#',
    repoUrl: 'https://github.com/amanch15/Rock-Paper-Scissor-Game',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Virus Detection Tool',
    description: 'Developed a web-based virus detection tool that scans uploaded files for threats. Implemented secure file handling and backend processing using Node.js and Express. Built a responsive frontend with HTML, CSS, and JavaScript for smooth interaction. Applied basic cybersecurity concepts and best practices to ensure safe usage.',
    image: 'https://picsum.photos/600/400?random=14',
    imageHint: 'cyber security technology',
    liveUrl: 'https://securedocscanner.vercel.app/',
    repoUrl: '#',
    tags: ['Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
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

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              className="flex"
            >
              <Card className="flex flex-col overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                <CardHeader>
                  <div className="aspect-[3/2] relative">
                     <Image
                      src={project.image}
                      data-ai-hint={project.imageHint}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                   <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
