import FAQAccordion from "../../components/HelpCentre/FAQAccordion";
import HelpPageShell from "../../components/HelpCentre/HelpPageShell";
import { faqItems } from "../../data/faqItems";

function FAQs() {
  return (
    <HelpPageShell
      title='Frequently Asked Questions'
      intro='Quick answers to common customer questions.'
    >
      <FAQAccordion items={faqItems} />
    </HelpPageShell>
  );
}

export default FAQs;
