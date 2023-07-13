import React from "react";

export default function ProjectCard(props: any) {
  const { project, index } = props;
  return (
    <div
      className={
        "flex flex-col" +
        (index % 2 === 0 ? " md:flex-row" : " md:flex-row-reverse")
      }
    >
      <div className="flex-1 items-center flex">
        <img src={project.imgLink} alt="Pic" />
      </div>

      <div className="flex flex-col flex-1 justify-center items-center">
        <a
          href={project.link}
          target="_blank"
          className=" duration-200 hover:text-sky-600 p-4 sm:p-6"
        >
          <h2 className=" text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            {project.name}
          </h2>
        </a>
        <div className="text-xs sm:text-sm text-justify px-4 sm:px-6 pb-4 sm:pb-6">
          {project.description}
        </div>
      </div>
    </div>
  );
}
