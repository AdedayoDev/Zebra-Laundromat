import HelpPageShell from "../../components/HelpCentre/HelpPageShell";
import GuidelineSection from "../../components/HelpCentre/GuidelineSection";

function HealthAndSafety() {
  return (
    <HelpPageShell
      title='Health & Safety'
      intro='Your safety is important to us. Please help us maintain a safe environment by following these guidelines.'
    >
      <div className='grid gap-6 lg:grid-cols-2'>
        <GuidelineSection
          heading='Safety Rules'
          items={[
            "Report spills immediately.",
            "Do not tamper with electrical equipment.",
            "Keep aisles and exits clear.",
            "Follow staff instructions during emergencies.",
          ]}
        />
        <GuidelineSection
          heading='In an Emergency'
          intro='If you notice:'
          items={[
            "Fire",
            "Electrical fault",
            "Medical emergency",
            "Please notify a member of staff immediately.",
          ]}
        />
      </div>
    </HelpPageShell>
  );
}

export default HealthAndSafety;
