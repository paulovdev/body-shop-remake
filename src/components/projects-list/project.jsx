const ProjectList = ({ project, index, router, slideInOut }) => {
  return (
    <div
      className="px-4 py-3 border-b border-[#00000011] grid grid-cols-4 gap-4 max-md:flex max-md:justify-between cursor-pointer"
      onClick={() => {
        router.push("/projects/" + project.id, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      <div className="w-full flex items-start justify-start">
        <p className="text-fg text-[23px] max-md:text-[18px]">
          {project.title}
        </p>
      </div>
      <div className="w-full flex items-start justify-start max-md:hidden">
        <p className="text-fg text-[23px] max-md:text-[18px]  uppercase">
          00{index}
        </p>
      </div>
      <div className="w-full flex items-start justify-start gap-2 max-md:hidden">
        {project.tags.map((tags, i) => (
          <p
            className="text-fg text-[23px] max-md:text-[18px]  uppercase"
            key={i}
          >
            {tags}
          </p>
        ))}
      </div>
      <div className="w-full flex items-end justify-end">
        <p className="text-fg text-[23px] max-md:text-[18px]  uppercase">
          {project.year}
        </p>
      </div>
    </div>
  );
};
export default ProjectList;
