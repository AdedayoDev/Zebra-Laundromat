import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "./Breadcrumb";

interface HelpPageShellProps {
  title: string;
  intro?: string;
  children: ReactNode;
}

function HelpPageShell({ title, intro, children }: HelpPageShellProps) {
  return (
    <main className='bg-(--detergent-white) px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='mx-auto max-w-6xl'>
        <Breadcrumb currentPage={title} />

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='max-w-3xl'
        >
          <h1 className='premium-heading text-4xl font-semibold sm:text-5xl lg:text-6xl'>
            {title}
          </h1>
          {intro ? (
            <p className='mt-5 text-base leading-8 text-(--text-muted) sm:text-lg'>
              {intro}
            </p>
          ) : null}
        </motion.header>

        <div className='mt-10'>{children}</div>
      </div>
    </main>
  );
}

export default HelpPageShell;
