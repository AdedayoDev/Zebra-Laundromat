import Accordion from "../../components/Accordion";
import HelpPageShell from "../../components/HelpCentre/HelpPageShell";

type MachineStep = {
  title: string;
  content: string[];
};

const washerSteps: MachineStep[] = [
  {
    title: "Load your laundry.",
    content: [
      "Load clothes loosely into the drum.",
      "Maximum dry load: 8 kg.",
      "Small items such as baby socks should be placed inside a mesh garment bag.",
      "To wash your blankets and comforters, reach out to our staff for guidance.",
    ],
  },
  {
    title: "Close the loading door securely.",
    content: ["The washer will not operate if the door is open."],
  },
  {
    title: "Add your laundry supplies.",
    content: [
      "Use the detergent drawer for:",
      "Main wash detergent",
      "Liquid bleach",
      "Fabric softener",
      "Pre-wash detergent",
      "If using detergent pods or laundry sheets, place them directly inside the drum.",
      "If using non-HE detergent, use only half of the manufacturer's recommended quantity.",
    ],
  },
  {
    title: "Choose your wash settings.",
    content: ["Select the wash temperature.", "Select the soil level."],
  },
  {
    title: "Press Start.",
    content: ["Your wash cycle will begin."],
  },
];

const dryerSteps: MachineStep[] = [
  {
    title: "Load your laundry.",
    content: [
      "Load clothes loosely.",
      "Maximum dry load: 8.2 kg.",
      "Add a fabric softener sheet if desired.",
    ],
  },
  {
    title: "Close the loading door.",
    content: ["The dryer will not operate with the door open."],
  },
  {
    title: "Select your drying temperature.",
    content: ["Always follow the garment care label."],
  },
  {
    title: "Press Start.",
    content: [
      "Open the door at any time to stop the dryer.",
      "Close the door and press Start again to continue.",
      "Remove knitted garments while slightly damp to reduce shrinkage.",
    ],
  },
];

const toAccordionItems = (steps: MachineStep[]) =>
  steps.map((step) => ({
    title: step.title,
    content: (
      <ul className='list-disc space-y-2 leading-7'>
        {step.content.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    ),
  }));

function HowToUseOurMachines() {
  return (
    <HelpPageShell
      title='How to Use Our Self-Service Machines'
      intro='Using our machines is simple. Follow the steps below for the best washing and drying results.'
    >
      <div className='space-y-8'>
        <section aria-labelledby='washing-machine-heading'>
          <h2
            id='washing-machine-heading'
            className='mb-4 text-2xl font-semibold text-(--zebra-blue) sm:text-3xl'
          >
            Washing Machine
          </h2>
          <Accordion
            items={toAccordionItems(washerSteps)}
            showImage={false}
            showDisc={true}
          />
        </section>

        <section aria-labelledby='dryer-heading'>
          <h2
            id='dryer-heading'
            className='mb-4 text-2xl font-semibold text-(--zebra-blue) sm:text-3xl'
          >
            Dryer
          </h2>
          <Accordion
            items={toAccordionItems(dryerSteps)}
            showImage={false}
            showDisc={true}
          />
        </section>
      </div>
    </HelpPageShell>
  );
}

export default HowToUseOurMachines;
