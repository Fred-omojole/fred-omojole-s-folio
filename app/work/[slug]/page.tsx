import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import {
  projects,
  WalkthroughSection as WalkthroughSectionType,
} from "@/data/work";
import {
  getProjectBySlug,
  generateProjectMetadata,
  getNextProject,
} from "@/lib/projectHelper";
import { ZoomableMedia } from "@/components/ZoomableMedia";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.filter((p) => p.walkthrough).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return generateProjectMetadata(project);
}

function WalkthroughSection({ section }: { section: WalkthroughSectionType }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-2xl italic text-[#102018] mb-6">{section.title}</h2>

      <p className="text-base text-[#405347] leading-relaxed">
        {section.content}
      </p>

      {section.highlights && section.highlights.length > 0 && (
        <ul className="mt-6 space-y-2">
          {section.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#405347]">
              <span className="text-[#9bb7a5]">-</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const next = getNextProject(slug);

  if (!project || !project.walkthrough) {
    notFound();
  }

  return (
    <article className="pb-24">
      {/* Header with View Work button */}
      <header className="mx-auto max-w-5xl px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
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
      </header>

      {/* Hero image */}
      <section className="mx-auto max-w-3xl px-4 mt-12">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#e8f4ec] to-[#d4e8dc] p-4 md:p-8">
          <ZoomableMedia
            type="image"
            src={project.image}
            alt={project.name}
            width={1200}
            height={675}
            priority
          />
        </div>
        <p className="text-xs text-[#7c9487] mt-3 italic text-center">{project.name} cover image</p>
      </section>

      {/* Goal */}
      <WalkthroughSection section={project.walkthrough.goal} />

      {/* What I Built - with video */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl italic text-[#102018] mb-6">
            {project.walkthrough.whatWasBuilt.title}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl px-4">
          <p className="text-base text-[#405347] leading-relaxed">
            {project.walkthrough.whatWasBuilt.content}
          </p>

          {project.walkthrough.videoUrl && (
            <div className="mt-8">
              <ZoomableMedia
                type="video"
                src={project.walkthrough.videoUrl}
                poster={project.walkthrough.videoPoster}
                caption={project.walkthrough.whatWasBuilt.mediaCaption}
              />
            </div>
          )}

          {project.walkthrough.whatWasBuilt.highlights &&
            project.walkthrough.whatWasBuilt.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {project.walkthrough.whatWasBuilt.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#405347]">
                    <span className="text-[#9bb7a5]">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
        </div>
      </section>

      {/* Technical Approach */}
      <WalkthroughSection section={project.walkthrough.technicalApproach} />

      {/* Result */}
      <WalkthroughSection section={project.walkthrough.result} />

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="border-t border-[#d4e8dc]"></div>
      </div>

      {next && (
        <section className="mx-auto max-w-3xl px-4 py-12">
          <div className="rounded-3xl border border-[#d4e8dc] bg-[#f7fbf8] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7c9487]">
              Next project
            </p>
            <h3 className="mt-3 text-2xl italic text-[#102018]">{next.name}</h3>
            <p className="mt-2 text-sm text-[#405347]">{next.category}</p>
            <p className="mt-4 text-base text-[#405347] leading-relaxed">
              {next.summary}
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#102018] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2f24]"
            >
              View next project
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}
