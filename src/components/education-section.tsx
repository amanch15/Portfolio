import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Education
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            My academic background.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-5xl mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
               <GraduationCap className="h-8 w-8 text-primary" />
               <CardTitle className="text-2xl">Bachelor of Technology in Computer Science</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-left ml-12">
              <p className="font-semibold">Amity University, Kolkata</p>
              <p className="text-muted-foreground">2022 - Present | Kolkata, India</p>
              <p>CGPA: 6.38 (as of 6th semester)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
