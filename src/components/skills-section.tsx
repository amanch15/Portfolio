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

const skills = [
  { name: 'React', icon: <IconReact className="h-12 w-12" /> },
  { name: 'Next.js', icon: <IconNextjs className="h-12 w-12" /> },
  { name: 'JavaScript', icon: <IconJavascript className="h-12 w-12" /> },
  { name: 'HTML5', icon: <IconHtml5 className="h-12 w-12" /> },
  { name: 'CSS3', icon: <IconCss3 className="h-12 w-12" /> },
  { name: 'Tailwind CSS', icon: <IconTailwind className="h-12 w-12" /> },
  { name: 'Node.js', icon: <IconNodejs className="h-12 w-12" /> },
  { name: 'Express', icon: <IconExpress className="h-12 w-12" /> },
  { name: 'Python', icon: <IconPython className="h-12 w-12" /> },
  { name: 'C++', icon: <IconCplusplus className="h-12 w-12" /> },
  { name: 'C#', icon: <IconCsharp className="h-12 w-12" /> },
  { name: 'SQL', icon: <IconSql className="h-12 w-12" /> },
  { name: 'MongoDB', icon: <IconMongodb className="h-12 w-12" /> },
  { name: 'MySQL', icon: <IconMysql className="h-12 w-12" /> },
  { name: 'Firebase', icon: <IconFirebase className="h-12 w-12" /> },
  { name: 'Git', icon: <IconGit className="h-12 w-12" /> },
  { name: 'GitHub', icon: <IconGithub className="h-12 w-12" /> },
  { name: 'Bootstrap', icon: <IconBootstrap className="h-12 w-12" /> },
  { name: 'Heroku', icon: <IconHeroku className="h-12 w-12" /> },
  { name: 'jQuery', icon: <IconJquery className="h-12 w-12" /> },
  { name: 'Markdown', icon: <IconMarkdown className="h-12 w-12" /> },
  { name: 'npm', icon: <IconNpm className="h-12 w-12" /> },
  { name: 'Rest API', icon: <IconRestApi className="h-12 w-12" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            I have experience with these technologies
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A look at the tools and technologies I use to build things.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300"
            >
              {skill.icon}
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
