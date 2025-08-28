import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="introduction" className="w-full py-20 md:py-32">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative space-y-4">
           <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse delay-500"></div>

          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-mono text-primary">
            4th Year B.Tech CSE Student
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Aman Choudhary
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            A passionate and dedicated computer science student with a strong foundation in web development, software engineering principles, and a keen interest in creating innovative solutions.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
            <Button asChild size="lg" className="shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-shadow">
              <a href="#contact">Contact Me</a>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
               <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative">
           <div className="absolute inset-0 w-full h-full bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <Image
            src="https://picsum.photos/400/400"
            data-ai-hint="professional headshot"
            alt="Aman Choudhary"
            width={400}
            height={400}
            className="rounded-full object-cover aspect-square shadow-2xl shadow-primary/20"
          />
        </div>
      </div>
    </section>
  );
}
