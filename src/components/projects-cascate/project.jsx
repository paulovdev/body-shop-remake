import Image from "next/image";

const ProjectCascate = ({ project, router, slideInOut }) => (
  <figure
    id={`project-${project.id}`}
    className="w-full select-none"
    onClick={() => {
      router.push(`/projects/${project.id}`, {
        onTransitionReady: slideInOut,
      });
    }}
  >
    <Image
      src={project.img}
      width={2000}
      height={2000}
      alt={project.title}
      className="w-full h-screen object-cover"
    />
  </figure>
);

export default ProjectCascate;
