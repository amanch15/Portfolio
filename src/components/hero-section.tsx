import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="introduction" className="w-full py-20 md:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
            4th Year B.Tech CSE Student
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Aman Choudhary
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A passionate and dedicated computer science student with a strong foundation in web development, software engineering principles, and a keen interest in creating innovative solutions.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
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
        <div className="flex justify-center">
          <Image
            src="https://picsum.photos/400/400"
            data-ai-hint="professional headshot"
            alt="Aman Choudhary"
            width={400}
            height={400}
            className="rounded-full object-cover aspect-square shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
