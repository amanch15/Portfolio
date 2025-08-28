import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind, or just want to say hello? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-left">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    You can reach me via email or connect with me on social media.
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:amanch1504@gmail.com" className="flex items-center gap-2 hover:text-primary">
                      <Mail className="h-5 w-5" />
                      <span>amanch1504@gmail.com</span>
                    </a>
                     <a href="https://www.linkedin.com/in/aman-choudhary-398508343" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                      <span>Aman Choudhary</span>
                    </a>
                     <a href="https://github.com/amanch15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                      <Github className="h-5 w-5" />
                      <span>amanch15</span>
                    </a>
                  </div>
                </div>
                <form className="space-y-4 text-left">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
