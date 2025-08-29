import Link from 'next/link';
import { Code2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            Aman Choudhary
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 lg:space-x-6">
          <Link href="#skills" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Skills
          </Link>
          <Link href="#education" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Education
          </Link>
          <Link href="#certifications" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Certifications
          </Link>
          <Link href="#experience" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Experience
          </Link>
          <Link href="#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-2">
           <Button asChild variant="outline">
              <a href="https://shorturl.at/xBCMS" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          <Button asChild className="shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-shadow">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
