import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import HelpPageShell from "../../components/HelpCentre/HelpPageShell";

const responsibilities = [
  "Follow all machine instructions.",
  "Follow all posted safety notices.",
  "Follow staff directions where necessary.",
  "Use the equipment responsibly.",
];

function CustomerResponsibilities() {
  const navigate = useNavigate();

  return (
    <HelpPageShell
      title='Customer Responsibilities'
      intro='To keep our laundromat safe and enjoyable for everyone:'
    >
      <section className='rounded-3xl border border-(--border-light) bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8'>
        <ul className='list-disc space-y-3 pl-5 leading-7 text-(--text-dark)'>
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className='mt-8 border-t border-(--border-light) pt-6'>
          <p className='leading-8 text-(--text-dark)'>
            Customers may be held responsible for damage or loss caused by
            misuse of the machines or failure to follow operating instructions.
          </p>
          <p className='mt-4 leading-8 text-(--text-muted)'>
            For full details, please read our Customer Policy.
          </p>
          <Button className='mt-6' onClick={() => navigate("/policy")}>
            View Full Policy
          </Button>
        </div>
      </section>
    </HelpPageShell>
  );
}

export default CustomerResponsibilities;
