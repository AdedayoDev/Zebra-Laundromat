import HelpPageShell from "../../components/HelpCentre/HelpPageShell";
import GuidelineSection from "../../components/HelpCentre/GuidelineSection";

const guidelineSections = [
  {
    heading: "Before Using the Machine",
    items: [
      "Check garment care labels.",
      "Separate whites, colours and delicate fabrics.",
      "Empty all pockets.",
      "Use the correct amount of detergent.",
    ],
  },
  {
    heading: "Do Not Wash",
    items: [
      "Paint-covered clothing",
      "Oil-soaked garments",
      "Flammable materials",
      "Items contaminated with hazardous chemicals",
    ],
  },
  {
    heading: "During Use",
    items: [
      "Do not overload the machine.",
      "Do not force the doors closed.",
      "Stay nearby while your laundry is running.",
      "Clean the machine after use if necessary.",
      "Report any machine fault to a member of staff immediately.",
    ],
  },
];

function MachineUsageGuidelines() {
  return (
    <HelpPageShell title='Machine Usage Guidelines'>
      <div className='grid gap-6 lg:grid-cols-3'>
        {guidelineSections.map((section) => (
          <GuidelineSection key={section.heading} {...section} />
        ))}
      </div>
    </HelpPageShell>
  );
}

export default MachineUsageGuidelines;
