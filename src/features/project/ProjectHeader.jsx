import React from "react";
import { HiArrowRight } from "react-icons/hi";

function ProjectHeader({ project }) {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button>
        <HiArrowRight className="size-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
