import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button/Button";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const contactDetails = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+234 812 345 6789\n+234 958 568 685",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "zebra@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Casablanca Street, Lagos",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday – Friday\n9:00 AM – 5:00 PM",
  },
];

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id='contact'
      className='scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='contact-heading'
    >
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'>
        <div className='max-w-2xl'>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className='text-[20px] font-semibold text-[#00DA40]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact Us
          </motion.p>

          <motion.h2
            id='contact-heading'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className='mt-4 text-[30px] font-semibold leading-tight text-black sm:text-[36px] lg:text-[40px]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Experience
            <br />
             Exceptional Care
          </motion.h2>

          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className='mt-5 text-[16px] leading-[170%] text-black/80 sm:text-[18px] lg:text-[20px]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Have questions or need a service? Our team is here to help. Get in
            touch today to book a service, request a quote, or learn more about
            how we can assist you. We look forward to serving you.
          </motion.p>

          <div className='mt-10 space-y-6'>
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <motion.div
                  key={detail.title}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + index * 0.05,
                    ease: "easeOut",
                  }}
                  className='flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm'
                >
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF8FF]'>
                    <Icon className='h-5 w-5 text-[#002590]' />
                  </div>
                  <div>
                    <h3 className='text-[16px] font-semibold text-black'>
                      {detail.title}
                    </h3>
                    <p className='mt-1 whitespace-pre-line text-[15px] leading-7 text-black/75'>
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className='rounded-[24px] bg-[#F8F8F8] p-6 shadow-md sm:p-8 lg:p-10'
        >
          <h3 className='text-[28px] font-semibold text-black text-center sm:text-[30px]'>
            Send Us A Message
          </h3>

          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-medium text-black'
                >
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Full Name'
                  className='h-[52px] w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#002590] focus:ring-2 focus:ring-[#002590]/20'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-black'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email Address'
                  className='h-[52px] w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#002590] focus:ring-2 focus:ring-[#002590]/20'
                />
              </div>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='phone'
                  className='mb-2 block text-sm font-medium text-black'
                >
                  Phone Number
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone Number'
                  className='h-[52px] w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#002590] focus:ring-2 focus:ring-[#002590]/20'
                />
              </div>

              <div>
                <label
                  htmlFor='service'
                  className='mb-2 block text-sm font-medium text-black'
                >
                  Service Needed
                </label>
                <select
                  id='service'
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  className='h-[52px] w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#002590] focus:ring-2 focus:ring-[#002590]/20'
                >
                  <option value=''>Select Service</option>
                  <option value='House Cleaning'>House Cleaning</option>
                  <option value='Laundry Service'>Laundry Service</option>
                  <option value='Dry Cleaning'>Dry Cleaning</option>
                  <option value='Commercial Cleaning'>
                    Commercial Cleaning
                  </option>
                  <option value='Office Cleaning'>Office Cleaning</option>
                  <option value='Deep Cleaning'>Deep Cleaning</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-medium text-black'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder='Write your message here...'
                className='w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#002590] focus:ring-2 focus:ring-[#002590]/20'
              />
            </div>

            <Button
              type='submit'
              variant='primary'
              className='h-[56px] w-full rounded-lg bg-[#002590] px-6 py-3 text-white transition-all duration-300 hover:scale-[1.01]'
            >
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
