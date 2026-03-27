import { projects, projectProp } from "@/data/work";

export function getProjectBySlug(slug: string): projectProp | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): projectProp | undefined {
  const walkthroughProjects = projects.filter((p) => p.walkthrough);
  const currentIndex = walkthroughProjects.findIndex(
    (p) => p.slug === currentSlug,
  );
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % walkthroughProjects.length;
  return walkthroughProjects[nextIndex];
}

export function getAllProjectSlugs(): string[] {
  return projects.filter((p) => p.walkthrough).map((p) => p.slug);
}

export function generateProjectMetadata(project: projectProp | undefined) {
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | Fred Omojole`,
    description: project.excerpt,
    openGraph: {
      title: project.name,
      description: project.excerpt,
      images: [project.image],
    },
  };
}
