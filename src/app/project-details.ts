import { Project } from "./project";
import { ProjectContributor } from "./project-manager";

export interface ProjectDetails extends Project {
  benefits: string;
  description: string;
  statusDescription: string;
  releaseStatusString: string;
  projectManagers: ProjectContributor[] | undefined;
  programManagers: ProjectContributor[] | undefined;
  programDirectors: ProjectContributor[];
}
