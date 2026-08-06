import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";

interface AccordionItem {
  title: ReactNode;
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const location = useLocation();
  const isPolicyPage = location.pathname === "/policy";
  const accentColorClass = isPolicyPage ? "text-[#002598]" : "text-gray-900";
  const dotColorClass = isPolicyPage ? "bg-[#EA2126]" : "bg-(--softener-blue)";

  return (
    <section className='w-full rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8'>
      {showImage && ImageSrc ? (
        <header
          className={`mb-8 flex items-center gap-3  ${showImage ? "justify-start" : "p-0 -pt-20"}`}
        >
          <div>
            <img src={ImageSrc} alt='Self Services' className='h-6 w-6' />
          </div>

          <h2 className='text-lg font-semibold text-gray-900 sm:text-xl'>
            {header}
          </h2>
        </header>
      ) : null}

      <div className='divide-y divide-gray-200'>
        {(items ?? []).map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <button
                type='button'
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='flex w-full items-center justify-between gap-3 py-4 text-left transition-colors duration-200 hover:bg-gray-50'
              >
                <div className='flex min-w-0 items-center justify-center gap-3'>
                  {showDisc ? (
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full ${dotColorClass}`}
                    />
                  ) : null}

                  <div className='flex min-w-0 flex-col items-start'>
                    <h3
                      className={`text-base font-semibold sm:text-lg ${accentColorClass}`}
                    >
                      {item.title}
                    </h3>
                    {item.showUnderline ? (
                      <div className='mt-1 h-0.5 w-full min-w-10/12  md:min-w-2xl lg:min-w-5xl mx-auto bg-[#EA2126]' />
                    ) : null}
                  </div>
                </div>

                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-(--zebra-blue) transition-transform duration-300'>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className='overflow-hidden'>
                  <div className='pl-6 pr-2 text-gray-600 sm:pl-7'>
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
