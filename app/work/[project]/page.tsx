import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../projects-data";
import ProjectView from "./project-view";
type Props = {
  params: Promise<{
    project: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { project: slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
}