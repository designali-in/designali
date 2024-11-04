import { ProjectModal } from './types';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ProjectItem({ index, title, url, role, setModal }: ProjectProps) {
  return (

    <a
      href={url}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group relative flex w-full hover:text-slate-600 hover:dark:text-slate-400 items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-4 sm:px-14 sm:py-6"
      rel="noreferrer"
    >
      <h1 className="text-md font-medium transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-2xl">
        {title}
      </h1>
      <p className="text-xs font-light transition-all group-hover:translate-x-1 group-hover:scale-102 sm:text-lg">
        {role}
      </p>
    </a>
  );
}
