import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectProp } from "@/data/work";

type Props = {
  project: projectProp;
};

export function ProjectHero({ project }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl italic text-[#102018]">
            {project.name}
          </h1>
          <p className="text-sm text-[#405347] mt-2">{project.category}</p>
          <p className="text-base text-[#405347] mt-6 max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>
        {project.buttonLink && (
          <a
            href={project.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102018] text-white text-sm font-medium rounded-full hover:bg-[#1a2f24] transition-colors shrink-0"
          >
            View work
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="mt-10  overflow-hidden bg-gradient-to-b from-[#e8f4ec] to-[#d4e8dc] p-4 md:p-8">
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={675}
          className="w-full h-auto "
          priority
        />
      </div>
    </section>
  );
}
