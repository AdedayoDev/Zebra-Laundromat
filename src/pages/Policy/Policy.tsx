import Accordion from "../../components/Accordion";
import GetHelpPolicyHeader from "../../components/GetHelpPolicyHeader";

export const Policy = () => {
  const CustomerServicePolicy = [
    {
      title: "Customer Service Policy",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              At Zebra Laundromat, every customer deserves a friendly,
              respectful and professional experience. We are committed to
              delivering consistent, high-quality laundry services from the
              moment you contact us until your garments are returned.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We will treat every customer with courtesy, communicate honestly,
              respond promptly and continually improve our service.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Friendly and respectful service.</li>
              <li>Clear explanations of our services and prices</li>
              <li>Prompt responses to enquiries.</li>
              <li>Professional handling of complaints.</li>
              <li>Respect for your privacy and belongings.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Treat our employees respectfully.</li>
              <li>Provide accurate garment information.</li>
              <li>Notify us promptly if you have a concern.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              Our team records inquiries and complaints, investigates where
              necessary, communicates progress and seeks a fair resolution
              within our service standards.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Expectations
            </h3>
            <p className='text-gray-600'>
              Abusive or threatening behavior may result in refusal of service.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: How do I make a complaint?</span>
              <br />
              <span>
                A: Contact us through our customer service desk, phone, email or
                website and we will acknowledge your concern promptly
              </span>
            </p>
          </div>

          <p>
            <strong>Need assistance?</strong>Contact our Customer Experience
            Team through any of our official communication channels.
          </p>
        </div>
      ),
    },
  ];

  const TermsAndConditions = [
    {
      title: "Terms and Conditions",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              These terms explain the conditions that apply whenever you use
              Zebra Laundromat's laundry services
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We aim to provide transparent service conditions so you know
              exactly what to expect before we accept your order.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Clear pricing before work begins.</li>
              <li>Estimated turnaround times.</li>
              <li>Information about service limitations.</li>
              <li>Professional handling of your garments.</li>
              <li>
                {" "}
                <strong>
                  We accept card and digital payments only; cash is not
                  accepted.
                </strong>
              </li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Check your order details before leaving.</li>
              <li>Inform us of delicate or valuable items.</li>
              <li>
                Please collect your order within 30 days. Storage charges may
                apply after that; items uncollected after 3 months may be
                donated or disposed of.
              </li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              Using our services means you accept our published terms and
              conditions, including garment care limitations and liability
              provisions.{" "}
              <strong>
                Our maximum liability for any verified loss or damage caused
                solely by our negligence does not exceed five (5) times the
                cleaning charge for the affected item, unless otherwise required
                by applicable law
              </strong>
              .
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Expectations
            </h3>
            <p className='text-gray-600'>
              Certain specialty items may require additional processing time or
              may not be accepted.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: Can I request special handling?</span>
              <br />
              <span>
                A: Yes. Inform our team before your order is processed.
              </span>
            </p>
          </div>

          <p>
            <strong>Need assistance?</strong>Contact our Customer Experience
            Team through any of our official communication channels.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section className='bg-(--detergent-white)'>
      <GetHelpPolicyHeader
        header='Customer Policy & Legal Centre'
        body='Everything you need to know about how we work with you, clearly explained, in one place'
      />

      <section className='px-4 py-8 sm:px-6 lg:px-8 lg:py-6 '>
        <div className='mx-auto max-w-6xl space-y-6'>
          <Accordion
            items={CustomerServicePolicy}
            showImage={false}
            showDisc={false}
          />
          <Accordion
            items={TermsAndConditions}
            showImage={false}
            showDisc={false}
          />
        </div>
      </section>
    </section>
  );
};
