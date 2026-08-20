import {
  BookOpen,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  WashingMachine,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import HelpCategoryCard from "../../components/HelpCentre/HelpCategoryCard";


const helpCategories = [
  {
    id: "machines",
    title: "How to Use Our Machines",
    description:
      "Learn how to use our washing machines and dryers step by step.",
    href: "/help/how-to-use-our-machines",
    icon: WashingMachine,
  },
  {
    id: "guidelines",
    title: "Machine Usage Guidelines",
    description: "Important information to know before and during every wash.",
    href: "/help/machine-usage-guidelines",
    icon: BookOpen,
  },
  {
    id: "safety",
    title: "Health & Safety",
    description:
      "Safety information for all customers using Zebra's facilities.",
    href: "/help/health-and-safety",
    icon: ShieldCheck,
  },
  {
    id: "responsibilities",
    title: "Customer Responsibilities",
    description:
      "Your responsibilities when using Zebra's self-service facilities.",
    href: "/help/customer-responsibilities",
    icon: UserCheck,
  },
  {
    id: "faqs",
    title: "Frequently Asked Questions",
    description: "Quick answers to common customer questions.",
    href: "/help/faqs",
    icon: HelpCircle,
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Get in touch with our team if you need further assistance.",
    href: "/contact",
    icon: MessageCircle,
  },
];

function GetHelp() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className='bg-(--detergent-white)'>
      <section className='bg-(--zebra-blue) px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className='mx-auto max-w-7xl'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-(--kinetic-green)'>
            Get Help
          </p>
          <h1 className='mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
            How Can We Help?
          </h1>
          <p className='mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg'>
            Whether you’re using our self-service machines or dropping off your
            laundry, you’ll find the information you need here.
          </p>
        </motion.div>
      </section>

      <section className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
              >
                <HelpCategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default GetHelp;
