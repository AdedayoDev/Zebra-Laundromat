export type FaqItem = {
  question: string;
  answer: string | string[];
};

export const faqItems: FaqItem[] = [
  {
    question: "What is a laundromat?",
    answer:
      "A laundromat is a self-service laundry facility where you can wash and dry your clothes using commercial machines, or you can use our drop-off laundry service.",
  },
  {
    question: "Do I need to make an appointment?",
    answer: "No. Walk-ins are welcome during our business hours.",
  },
  {
    question: "Can I wash multiple loads at once?",
    answer:
      "Yes. Our commercial machines can help you finish several loads much faster than at home.",
  },
  {
    question: "Can I leave while my laundry is running?",
    answer: "Yes, but we recommend returning before your cycle is completed.",
  },
  {
    question: "Can I wash blankets and duvets?",
    answer:
      "Yes. We can accommodate many bulky household items. Please ask our attendants for guidance.",
  },
  {
    question: "Do you offer ironing?",
    answer: "Yes. Ironing is available as an optional add-on service.",
  },
  {
    question: "Can I drop off my laundry and return later?",
    answer:
      "Absolutely. We will notify you once your laundry is ready for collection.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes. Most laundry is completed on the same day.",
  },
  {
    question: "What does 10kg of laundry look like?",
    answer: [
      "15 to 20 everyday clothing items.",
      "One week's laundry for one or two people.",
      "Several bath towels and bed sheets.",
    ],
  },
  {
    question: "Why should I use a laundromat instead of washing at home?",
    answer:
      "Our commercial machines help you finish laundry faster, avoid electricity and water challenges, and give you back valuable time for work, family, or rest.",
  },
];
