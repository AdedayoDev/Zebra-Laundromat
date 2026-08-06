import Accordion from "../../components/Accordion";
import GetHelpPolicyHeader from "../../components/GetHelpPolicyHeader";
import FAQ from "../../sections/FAQ";

const washerItems = [
  {
    title: "Load Laundry",
    content: (
      <div className='space-y-4'>
        <p className='leading-7'>
          1. Load items loosely into the wash drum (8.0 kg maximum dry clothes
          load).
        </p>
        <p className='leading-7'>
          <strong className='font-semibold text-gray-800'>Note:</strong> Small
          items such as baby socks may get caught around the door. Please place
          these articles inside a mesh garment bag.
        </p>
        <p className='leading-7'>
          2. When washing bulky items such as blankets and comforters, use the{" "}
          <span className='uppercase'>Delicate/Bulky</span> cycle. The cycle
          includes agitation and final spin speed that maintain the load's
          balance and minimize wear to the articles.
        </p>
        <p className='leading-7'>
          <strong className='font-semibold text-gray-800'>Note:</strong>{" "}
          Different fabrics will have different densities and loads must be
          adjusted accordingly to meet machine loading specifications shown.
        </p>
      </div>
    ),
  },
  {
    title: "Close the Loading Door",
    content: (
      <p className='leading-7'>
        Close the loading door tightly. The washer will not operate with the
        loading door open.
      </p>
    ),
  },
  {
    title: "Add Laundry Supplies",
    content: (
      <div className='space-y-4'>
        <p className='leading-7'>1. Open the dispenser drawer.</p>
        <p className='leading-7'>
          2. Measure and add low sudsing, high efficiency (HE) main wash
          detergent (1), bleach (2), fabric softener (3) and pre-wash detergent
          (4) to the dispenser drawer.
        </p>
        <div className='inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700'>
          Important
        </div>
        <p className='leading-7'>
          If using single-load laundry detergent packets or 3-in-1 laundry
          sheets/PODS, DO NOT place them in the dispenser drawer. Place them
          directly in the wash drum with clothes.
        </p>
        <div className='inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700'>
          Important
        </div>
        <p className='leading-7'>
          If using non-HE detergent, avoid oversudsing by using 1/2 of the
          detergent manufacturer's recommended amount.
        </p>
        <p className='leading-7'>3. Close dispenser drawer.</p>
        <ol className='list-decimal list-inside space-y-2 pl-5 leading-7'>
          <li>Main Wash Detergent</li>
          <li>Liquid Bleach</li>
          <li>Fabric Softener</li>
          <li>Pre-Wash Detergent</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Determine Proper Control",
    content: (
      <p className='leading-7'>
        The direction of the arrow indicates which control is for which unit.
      </p>
    ),
  },
  {
    title: "Set Soil Temperature (°C)",
    content: (
      <p className='leading-7'>
        Push touchpad for desired cycle. Light indicates selection
      </p>
    ),
  },
  {
    title: "Set Soil Level",
    content: (
      <p className='leading-7'>
        Push Soil Level touchpad to select <br /> A, B or C. Light indicates
        selection
      </p>
    ),
  },
  {
    title: "Start Washer",
    content: (
      <p className='leading-7'>
        Push touchpad for desired cycle. Light indicates selection
      </p>
    ),
  },
];

const DryerItems = [
  {
    title: "Load Laundry",
    content: (
      <div className='space-y-4'>
        <p className='leading-7'>
          1. Load clothes loosely into dryer drum (8.2kg [18.0 pounds] maximum
          dry clothes load).
        </p>
        <p className='leading-7'>Add fabric softener sheet if desired.</p>
      </div>
    ),
  },
  {
    title: "Close the Loading Door",
    content: (
      <div>
        <p className='leading-7'>1. Close the loading door.</p>
        <p className='leading-7'>
          1. Dryer will not operate with the door open
        </p>
      </div>
    ),
  },
  {
    title: "Determine Proper Control",
    content: (
      <p className='leading-7'>
        The direction of the arrow indicates which control is for which unit.
      </p>
    ),
  },
  {
    title: "Set Dryer Temperature (°C)",
    content: (
      <p className='leading-7'>
        Select temperature setting <br />
        NOTE: Always follow manufacturer's core labels
      </p>
    ),
  },
  {
    title: "Start Dryer",
    content: (
      <div>
        <ol className='list-decimal list-inside space-y-2 pl-5 leading-7'>
          <li>To start dryer, push START pad</li>
          <li>To stop dryer at any time, open the door.</li>
          <li>
            {" "}
            To restart the dryer, close door and push START pad. Cycles
            completed when time remaining reaches 00 minutes.
          </li>
        </ol>

        <br/>
        <p>
          If Additional Time Feature is turned on, additional dryer time may be
          purchased at cycle start or while dryer is running. Remove knits when
          slightly damp because over-drying may cause shrinkage. Do not tumble
          dry knit woolens
        </p>
      </div>
    ),
  },
];

export const GetHelp = () => {
  return (
    <div className='bg-(--detergent-white)'>
      <GetHelpPolicyHeader
        header='Get Help'
        body='Need assistance or have a question? Our team is here to help with bookings, service inquiries, and support every step of the way'
      />

      <section className='px-4 py-8 sm:px-6 lg:px-8 lg:py-10 '>
        <div className='mx-auto max-w-6xl '>
          <Accordion
            items={washerItems}
            ImageSrc='/self-services.svg'
            header='Washer'
          />
        </div>
      </section>

      <section className='px-4 py-8 sm:px-6 lg:px-8 lg:py-10 '>
        <div className='mx-auto max-w-6xl '>
          <Accordion
            items={DryerItems}
            ImageSrc='/self-services.svg'
            header='Dryer'
          />
        </div>
      </section>

      <FAQ/>
    </div>
  );
};
