'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'C#', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Firebase', 'Rest API'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'npm', 'Heroku', 'Markdown'],
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
      ease: 'easeOut',
    },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Technical Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A look at the tools and technologies I use to build things.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
             <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              className="flex"
            >
              <Card className="flex flex-col w-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
