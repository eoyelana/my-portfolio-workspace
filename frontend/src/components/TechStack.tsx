import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { skills } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="flex flex-col gap-8">
      <SectionHeading eyebrow="Tech Stack" title="Tools I build with" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
