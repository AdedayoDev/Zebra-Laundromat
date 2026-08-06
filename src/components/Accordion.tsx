import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";

interface AccordionItem {
  title: ReactNode;
  description?: ReactNode;
  content: React.ReactNode;
  showUnderline?: boolean;
}

interface AccordionProps {
  items?: AccordionItem[];
  ImageSrc?: string;
  header?: string;
  showImage?: boolean;
  showDisc?: boolean;
}

const Accordion = ({
  items,
  ImageSrc,
  header,
  showImage = true,
  showDisc = true,
}: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const location = useLocation();
  const isPolicyPage = location.pathname === "/policy";
  const accentColorClass = isPolicyPage ? "text-[#002598]" : "text-gray-900";
  const dotColorClass = isPolicyPage ? "bg-[#EA2126]" : "bg-(--softener-blue)";

  return (
    <section className='w-full rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_60px_-24px_rgba(0,37,152,0.28)] backdrop-blur sm:p-6 lg:p-8'>
      {showImage && ImageSrc ? (
        <header
          className={`mb-8 flex items-center gap-3 ${showImage ? "justify-start" : "p-0 -pt-20"}`}
        >
          <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-[#002598]/10'>
            <img src={ImageSrc} alt='Self Services' className='h-6 w-6' />
          </div>

          <h2 className='text-lg font-semibold text-slate-900 sm:text-xl'>
            {header}
          </h2>
        </header>
      ) : null}

      <div className='divide-y divide-slate-200'>
        {(items ?? []).map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className='group'>
              <button
                type='button'
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='flex w-full items-center justify-between gap-3 py-4 text-left transition-all duration-200 hover:bg-slate-50/80'
              >
                <div className='flex min-w-0 items-start justify-center gap-3'>
                  {showDisc ? (
                    <span
                      className={`mt-1 h-3 w-3 shrink-0 rounded-full ${dotColorClass}`}
                    />
                  ) : null}

                  <div className='flex min-w-0 flex-col items-start'>
                    <h3
                      className={`text-base font-semibold sm:text-lg ${accentColorClass}`}
                    >
                      {item.title}
                    </h3>
                    {item.description ? (
                      <p className='mt-2 max-w-2xl text-sm text-slate-600'>
                        {item.description}
                      </p>
                    ) : null}
                    {item.showUnderline ? (
                      <div className='mt-3 h-1 w-full max-w-55 rounded-full bg-linear-to-r from-[#EA2126] via-[#EA2126]/80 to-[#002598]' />
                    ) : null}
                  </div>
                </div>

                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#002598] transition-all duration-300 group-hover:bg-[#002598] group-hover:text-white'>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
              >
                <div className='overflow-hidden'>
                  <div className='pl-6 pr-2 text-slate-600 sm:pl-7'>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
