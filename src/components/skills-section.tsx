import type { ReactNode } from 'react';
import { Code, Database, Wind, Cog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'HTML & CSS' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Wind className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Node.js & Express' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Databases & ORMs',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'Firebase' },
      { name: 'Prisma' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Cog className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'Figma' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A look at the technologies I work with.
          </p>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2">
          {skillData.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              custom={index}
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="text-base">
                      {skill.name}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
