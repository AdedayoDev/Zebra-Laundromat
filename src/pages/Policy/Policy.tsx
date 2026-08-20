import Accordion from "../../components/Accordion";
import GetHelpPolicyHeader from "../../components/GetHelpPolicyHeader";
import Location from "../../sections/Location";

type PolicyBlock = {
  heading: string;
  type: "paragraph" | "list" | "faq" | "note";
  content?: string | string[];
  question?: string;
  answer?: string;
};

type PolicyItem = {
  title: string;
  tag: string;
  blocks: PolicyBlock[];
};

const policies: PolicyItem[] = [
  {
    title: "Customer Service Policy",
    tag: "Service standards",

    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "At Zebra Laundromat, every customer deserves a friendly, respectful and professional experience. We are committed to delivering consistent, high-quality laundry services from the moment you contact us until your garments are returned.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Friendly and respectful service.",
          "Clear explanations of our services and prices.",
          "Prompt responses to enquiries.",
          "Professional handling of complaints.",
          "Respect for your privacy and belongings.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Treat our employees respectfully.",
          "Provide accurate garment information.",
          "Notify us promptly if you have a concern.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "How do I make a complaint?",
        answer:
          "Contact us through our customer service desk, phone, email or website and we will acknowledge your concern promptly.",
      },
      {
        heading: "Need assistance?",
        type: "note",
        content:
          "Contact our Customer Experience Team through any of our official communication channels.",
      },
    ],
  },
  {
    title: "Terms & Conditions of Service",
    tag: "Service terms",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "These terms explain the conditions that apply whenever you use Zebra Laundromat's laundry services.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Clear pricing before work begins.",
          "Estimated turnaround times.",
          "Information about service limitations.",
          "Professional handling of your garments.",
          "Card and digital payments only; cash is not accepted.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Check your order details before leaving.",
          "Inform us of delicate or valuable items.",
          "Please collect your order within 30 days. Storage charges may apply after that; items uncollected after 3 months may be donated or disposed of.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can I request special handling?",
        answer: "Yes. Inform our team before your order is processed.",
      },
      {
        heading: "Need assistance?",
        type: "note",
        content:
          "Contact our Customer Experience Team through any of our official communication channels.",
      },
    ],
  },
  {
    title: "Pricing Policy",
    tag: "Transparent pricing",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "We believe pricing should always be clear, fair and transparent.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Visible price lists.",
          "Advance notice of additional charges.",
          "Transparent promotional offers.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Review the price list.",
          "Ask questions before confirming your order.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can prices change?",
        answer:
          "Yes. Updated prices will always be communicated before your order is accepted.",
      },
    ],
  },
  {
    title: "Payment Policy",
    tag: "Secure payments",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "We aim to make payment simple, secure and transparent. This policy explains how payments are made, verified and recorded before garments are released.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Official receipt for every successful payment.",
          "Secure handling of payment information.",
          "Clear explanation of any payment-related issues.",
          "Digital payments only; cash is not accepted.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Pay for services before collection unless otherwise agreed, using card or an approved digital payment method.",
          "Retain your receipt until your order is collected.",
          "Notify us immediately if you notice any payment discrepancy.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can I pay when my clothes are delivered?",
        answer:
          "No. Payment is required before service and we accept card and digital payments only.",
      },
    ],
  },
  {
    title: "Garment Care Policy",
    tag: "Fabric care",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "Every garment entrusted to us receives professional care based on its fabric type, care label and cleaning requirements.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Inspection before cleaning.",
          "Appropriate washing methods.",
          "Quality checks before release.",
          "Professional packaging.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Inform us of stains, damage, delicate or expensive fabrics.",
          "Check your garments upon collection.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can every stain be removed?",
        answer:
          "While we use professional stain-removal techniques, some stains or fabric damage may be permanent.",
      },
    ],
  },
  {
    title: "Lost & Damaged Items Policy",
    tag: "Claims and care",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "We understand the value of your garments and are committed to handling every item with care.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Careful garment inspection.",
          "Transparent investigation.",
          "Timely communication.",
          "Fair claim assessment.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Inspect garments before handing them over.",
          "Report concerns immediately after collection.",
          "Keep your receipt.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "How do I report a damaged garment?",
        answer:
          "Contact us immediately with your order details for investigation.",
      },
    ],
  },
  {
    title: "Refund & Compensation Policy",
    tag: "Resolution options",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "If we fail to meet our service commitment, eligible customers may receive a refund, service credit or another appropriate resolution.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Fair review of all requests.",
          "Transparent decision making.",
          "Prompt communication.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Report issues promptly.",
          "Provide supporting information if requested.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "How long does a refund review take?",
        answer: "Most cases are reviewed within a few business days.",
      },
    ],
  },
  {
    title: "Satisfaction Guarantee Policy",
    tag: "Service recovery",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content: "Customer satisfaction is at the heart of everything we do.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Professional customer support.",
          "Opportunity for service recovery.",
          "Respectful communication.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Inform us as soon as possible.",
          "Allow us to review the concern.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "What if I'm still unhappy?",
        answer:
          "Ask to have your concern escalated to a supervisor or manager.",
      },
    ],
  },
  {
    title: "Privacy Policy",
    tag: "Your information",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "Your privacy matters to us. This policy explains how we collect, use, store and protect your personal information when you use our services.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Your information is used only to deliver and improve our services.",
          "Reasonable security measures protect your information.",
          "We only share information where required by law or with trusted service providers.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Provide accurate information.",
          "Keep your contact details up to date.",
          "Notify us if you believe your information has been used incorrectly.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can I request access to my personal information?",
        answer:
          "Yes. Contact us and we will respond in accordance with applicable data protection requirements.",
      },
    ],
  },
  {
    title: "Cookie Policy",
    tag: "Website preferences",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "Our website uses cookies to improve performance, remember your preferences and enhance your browsing experience.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Essential cookies keep the website functioning.",
          "Analytics cookies help us improve the website.",
          "Preference cookies remember your settings.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Review your browser cookie settings.",
          "Accept or decline optional cookies where available.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can I turn off cookies?",
        answer: "Yes. Most browsers allow you to manage or disable cookies.",
      },
    ],
  },
  {
    title: "Website Terms of Use",
    tag: "Digital use",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "These terms govern your use of the Zebra Laundromat website and digital platforms.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Access to current service information.",
          "Secure online browsing.",
          "Reliable online content.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Use the website lawfully.",
          "Do not interfere with website operations.",
          "Respect intellectual property.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can these terms change?",
        answer: "Yes. Updated terms will be published on this website.",
      },
    ],
  },
  {
    title: "Customer Complaint Resolution Policy",
    tag: "Feedback handling",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "We value your feedback and treat every complaint as an opportunity to improve.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Acknowledgement of your complaint.",
          "Professional investigation.",
          "Regular updates where necessary.",
          "Fair outcome.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Provide complete information.",
          "Allow us time to investigate.",
          "Treat our team respectfully.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "How do I make a complaint?",
        answer:
          "Contact us by phone, email, website or visit any Zebra Laundromat location.",
      },
    ],
  },
  {
    title: "Customer Code of Conduct",
    tag: "Community standards",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "To ensure a welcoming, respectful and enjoyable experience for everyone using our facilities.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Courteous assistance from our team.",
          "A clean and safe environment.",
          "Fair and respectful treatment.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Treat employees and other customers respectfully.",
          "Follow staff instructions.",
          "Respect company property.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can service be refused?",
        answer:
          "Yes, where behaviour compromises safety or violates this policy.",
      },
    ],
  },
  {
    title: "Self-Service Machine Policy",
    tag: "Machine use",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "Our self-service equipment is available for customers who wish to wash and dry their garments independently.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Clean, well-maintained equipment.",
          "Clear operating instructions.",
          "Assistance when required.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Read machine instructions.",
          "Use the correct detergent.",
          "Report faults immediately.",
          "Avoid overloading machines.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "What should I do if a machine stops working?",
        answer: "Inform a member of staff immediately.",
      },
    ],
  },
  {
    title: "Hygiene & Safety Policy",
    tag: "Health and safety",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "Your health and safety are important to us whenever you visit our premises.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Clean facilities.",
          "Routine sanitisation.",
          "Clearly marked safety notices.",
          "Prompt response to hazards.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Dispose of waste responsibly.",
          "Keep walkways clear.",
          "Report spills or hazards.",
          "No eating inside the laundry area.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "How often are the premises cleaned?",
        answer:
          "Customer areas are cleaned routinely throughout each operating day.",
      },
    ],
  },
  {
    title: "CCTV & Security Policy",
    tag: "Security",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "CCTV is used to help protect customers, employees and company property.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Clearly identified CCTV areas.",
          "Responsible handling of recordings.",
          "Secure premises.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Respect security procedures.",
          "Report suspicious activity.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Why does Zebra Laundromat use CCTV?",
        answer: "To enhance security and support incident investigations.",
      },
    ],
  },
  {
    title: "Child Safety Policy",
    tag: "Family safety",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "Children are welcome when accompanied by a responsible adult.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: ["Safe customer environment.", "Visible safety information."],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Supervise children at all times.",
          "Keep children away from operating equipment.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Can children use the machines?",
        answer: "Only under direct adult supervision where appropriate.",
      },
    ],
  },
  {
    title: "Prohibited Items Policy",
    tag: "Safety restrictions",
    blocks: [
      {
        heading: "Overview",
        type: "paragraph",
        content:
          "For the safety of everyone, certain items cannot be accepted for cleaning or brought into the facility.",
      },
      {
        heading: "What you can expect",
        type: "list",
        content: [
          "Clear guidance on unacceptable items.",
          "Explanation where an item cannot be accepted.",
        ],
      },
      {
        heading: "Your responsibilities",
        type: "list",
        content: [
          "Inform us if an item contains hazardous substances.",
          "Do not bring dangerous materials onto the premises.",
          "Do not bring any food item or eat inside the laundromat.",
        ],
      },
      {
        heading: "Frequently asked question",
        type: "faq",
        question: "Why was my item declined?",
        answer:
          "It may fall within our prohibited items list or present a safety risk.",
      },
    ],
  },
];

const renderBlock = (block: PolicyBlock, index: number) => {
  switch (block.type) {
    case "list":
      return (
        <div
          key={index}
          className='rounded-2xl border border-slate-200 bg-slate-50/80 p-4'
        >
          <h3 className='text-base font-semibold text-[#002598]'>
            {block.heading}
          </h3>
          <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600'>
            {(block.content as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "faq":
      return (
        <div
          key={index}
          className='rounded-2xl border border-[#EA2126]/20 bg-[#EA2126]/5 p-4'
        >
          <h3 className='text-base font-semibold text-[#EA2126]'>
            {block.heading}
          </h3>
          <p className='mt-3 font-medium text-slate-800'>{block.question}</p>
          <p className='mt-2 text-sm leading-7 text-slate-600'>
            {block.answer}
          </p>
        </div>
      );
    case "note":
      return (
        <div
          key={index}
          className='rounded-2xl border border-[#002598]/15 bg-[#002598]/5 p-4 text-sm text-slate-700'
        >
          <strong className='text-[#002598]'>{block.heading}</strong>{" "}
          {block.content}
        </div>
      );

    default:
      return (
        <div
          key={index}
          className='rounded-2xl border border-slate-200 bg-white p-4'
        >
          <h3 className='text-base font-semibold text-[#002598]'>
            {block.heading}
          </h3>
          <p className='mt-3 text-sm leading-7 text-slate-600'>
            {block.content}
          </p>
        </div>
      );
  }
};

export const Policy = () => {
  return (
    <section className='bg-[radial-gradient(circle_at_top_left,rgba(234,33,38,0.07),transparent_32%),radial-gradient(circle_at_top_right,rgba(0,37,152,0.08),transparent_30%),#f8f8f9]'>
      <GetHelpPolicyHeader
        header='Customer Policy & Legal Centre'
        body='Everything you need to know about how we work with you, clearly explained in one place.'
      />

      <section className='px-4 py-8 sm:px-6 lg:px-8 lg:py-10'>
        <div className='mx-auto max-w-6xl space-y-6'>
          {policies.map((policy) => (
            <Accordion
              key={policy.title}
              items={[
                {
                  title: policy.title,
                  showUnderline: true,
                  content: (
                    <div className='space-y-4'>
                      {policy.blocks.map((block, index) =>
                        renderBlock(block, index),
                      )}
                    </div>
                  ),
                },
              ]}
              showImage={false}
              showDisc={false}
            />
          ))}
        </div>
      </section>

      <div>
        <Location />
      </div>
    </section>
  );
};
