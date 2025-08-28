import type { ReactNode } from 'react';
import { Code, Database, Wind, Cog } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
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
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Wind className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Databases & ORMs',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'Prisma', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Cog className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel', level: 90 },
      { name: 'Figma', level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }: Skill) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <h3 className="font-medium">{name}</h3>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <Progress value={level} aria-label={`${name} proficiency ${level} percent`} />
  </div>
);

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
          {skillData.map((category) => (
            <Card key={category.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
