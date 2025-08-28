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
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with features like product catalog, shopping cart, user authentication, and Stripe payment integration.',
    image: 'https://picsum.photos/600/400?random=1',
    imageHint: 'online shopping',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management tool that helps users organize their tasks with boards, lists, and cards, inspired by Trello.',
    image: 'https://picsum.photos/600/400?random=2',
    imageHint: 'kanban board',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Firebase', 'Material UI'],
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with modern web technologies for a fast and beautiful experience.',
    image: 'https://picsum.photos/600/400?random=3',
    imageHint: 'web design',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'Genkit AI', 'Shadcn UI'],
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
