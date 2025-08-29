'use client';

import {
  IconReact,
  IconHtml5,
  IconCss3,
  IconTailwind,
  IconNextjs,
  IconBootstrap,
  IconExpress,
  IconFirebase,
  IconGithub,
  IconGit,
  IconHeroku,
  IconJavascript,
  IconJquery,
  IconMarkdown,
  IconMongodb,
  IconMysql,
  IconNpm,
  IconNodejs,
  IconPython,
  IconCplusplus,
  IconCsharp,
  IconSql,
  IconRestApi,
} from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <IconPython className="h-8 w-8" /> },
      { name: 'JavaScript', icon: <IconJavascript className="h-8 w-8" /> },
      { name: 'C++', icon: <IconCplusplus className="h-8 w-8" /> },
      { name: 'C#', icon: <IconCsharp className="h-8 w-8" /> },
      { name: 'SQL', icon: <IconSql className="h-8 w-8" /> },
      { name: 'HTML5', icon: <IconHtml5 className="h-8 w-8" /> },
      { name: 'CSS3', icon: <IconCss3 className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <IconReact className="h-8 w-8" /> },
      { name: 'Next.js', icon: <IconNextjs className="h-8 w-8" /> },
      { name: 'Tailwind CSS', icon: <IconTailwind className="h-8 w-8" /> },
      { name: 'Bootstrap', icon: <IconBootstrap className="h-8 w-8" /> },
      { name: 'jQuery', icon: <IconJquery className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <IconNodejs className="h-8 w-8" /> },
      { name: 'Express', icon: <IconExpress className="h-8 w-8" /> },
      { name: 'Firebase', icon: <IconFirebase className="h-8 w-8" /> },
      { name: 'Rest API', icon: <IconRestApi className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <IconMongodb className="h-8 w-8" /> },
      { name: 'MySQL', icon: <IconMysql className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: <IconGit className="h-8 w-8" /> },
      { name: 'GitHub', icon: <IconGithub className="h-8 w-8" /> },
      { name: 'npm', icon: <IconNpm className="h-8 w-8" /> },
      { name: 'Heroku', icon: <IconHeroku className="h-8 w-8" /> },
      { name: 'Markdown', icon: <IconMarkdown className="h-8 w-8" /> },
    ],
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
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2">
                        {skill.icon}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
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
