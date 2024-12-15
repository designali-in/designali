"use client";

import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  description: string;
  animate?: boolean;
}

const animation = {
  hide: {
    x: 0,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const PageTitle = (props: PageTitleProps) => {
  const { title, description, animate = true } = props;

  return (
    <div className="text-center">
      <motion.h2
        className="my-4 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text px-6 pb-1 text-3xl font-bold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-5xl"
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
        })}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mx-auto mb-6 max-w-3xl text-sm text-slate-600 dark:text-slate-400"
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
          transition: {
            delay: 0,
          },
        })}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default PageTitle;
