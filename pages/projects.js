import PageLayout from "../components/page-layout";
import Project from "../components/project";
import { projects } from "../const";

const Projects = () => {
  return (
    <PageLayout color="#EB8258" header="My Projects">
      {projects.map((val, index) => {
        return (
          <Project
            key={index}
            right={index % 2 === 0}
            picture={val.picture}
            description={val.description}
            techStack={val.techStack}
            repo={val.repo}
          />
        );
      })}
    </PageLayout>
  );
};

export default Projects;
