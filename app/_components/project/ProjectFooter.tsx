import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projectProp } from "@/data/work";

type Props = {
  project: projectProp;
  nextProject?: projectProp;
};

export function ProjectFooter({ project, nextProject }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-12 mt-8 border-t border-[#c2d3c7]/40">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {project.buttonLink && (
          <a
            href={project.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#102018] text-white text-sm font-medium rounded-full hover:bg-[#1a2f24] transition-colors"
          >
            View Live
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        {nextProject && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-2 text-sm text-[#405347] hover:text-[#102018] transition-colors"
          >
            <span>Next: {nextProject.name}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </section>
  );
}
