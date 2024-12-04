type Props = {
  project: {
    title: string;
    description: string;
    date?: number;
    views: number;
    stacks: string[];
    image?: string;
    githubUrl?: string;
  };
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <article className="p-4 md:p-8">
      <div className="flex justify-between gap-2 items-center"></div>
      <div className="flex justify-between items-center">
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project.title}
        </h2>
		{/* Uncomment to show the github logo */}
        {/* {project.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <img
              src="./github.png"
              alt="Project"
              className="w-[40px] h-[40px]"
            />
          </a>
        )} */}
      </div>
      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
        {project.description}
      </p>
      <div className="mt-4">
        {project.stacks.map((el) => (
          <div className="bg-gray-800 p-2 mr-4 mb-4 rounded-lg shadow-md inline-block max-w-full">
            <p className="text-gray-400 text-sm">{el}</p>
          </div>
        ))}
      </div>
	  {/* Uncomment to show the Project image */}
      {/* {project.image && (
        <img
          src={project.image}
          alt="Project"
          className="w-full h-auto object-cover rounded-lg mt-4"
        />
      )} */}
    </article>
  );
};
