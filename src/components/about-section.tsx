import { Card, CardContent } from "@/components/ui/card";

export function AboutMeSection() {
  const codeString = `const developer = {
  name: "Aman Choudhary",
  role: "CS Student | Full-Stack Developer | AI Enthusiast",
  interests: ["Web Development", "AI", "Problem Solving", "Cooking"],

  introduce() {
    console.log(\`Hi, I’m \${this.name}, a \${this.role}.\`);
    console.log("I enjoy:", this.interests.join(", "));
  }
};

developer.introduce();`;

  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-3xl bg-secondary shadow-lg">
            <CardContent className="p-6">
              <pre className="text-left text-sm md:text-base font-code text-muted-foreground overflow-x-auto">
                <code className="text-white">{codeString}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
