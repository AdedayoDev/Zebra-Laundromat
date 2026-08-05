import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  ImageSrc: string;
  header: string; 
 
}

const Accordion = ({ items, ImageSrc, header}: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='w-full rounded-xl bg-white p-4 shadow-md sm:p-6 lg:p-8'>
      <header className='mb-8 flex items-center gap-3 '>
       <div>
        <img src={ImageSrc} alt='Self Services' className='h-6 w-6' />  
       </div>

       <h2 className='text-lg font-semibold text-gray-900 sm:text-xl'>
          {header}
        </h2>
        
      </header>

      <div className='divide-y divide-gray-200'>
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.title}>
              <button
                type='button'
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='flex w-full items-center justify-between gap-3 py-4 text-left transition-colors duration-200 hover:bg-gray-50'
              >
                <div className='flex min-w-0 items-center justify-center gap-3'>
                  <span className='h-3 w-3 shrink-0 rounded-full bg-(--softener-blue)' />
                  <h3 className='text-base font-semibold text-gray-900 sm:text-lg'>
                    {item.title}
                  </h3>
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
