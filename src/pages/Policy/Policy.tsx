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

  const PaymentPolicy = [
    {
      title: "Payment Policy",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              We aim to make payment simple, secure and transparent. This policy
              explains how payments are made, verified and recorded before
              garments are released.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We are committed to secure payment processing, transparent pricing
              and accurate transaction records.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Official receipt for every successful payment.</li>
              <li>Secure handling of payment information.</li>
              <li>Clear explanation of any payment-related issues.</li>
              <li>Digital payments only; cash is not accepted</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>
                Pay for services before collection unless otherwise agreed,{" "}
                <strong>
                  using card or an approved digital payment method.
                </strong>
              </li>
              <li>Retain your receipt until your order is collected.</li>
              <li>
                Notify us immediately if you notice any payment discrepancy
              </li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              Once your order is completed, payment is verified through our
              approved digital payment channels. Your garments are released
              after successful confirmation and an official receipt is issued.
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
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: Can I pay when my clothes are delivered?</span>
              <br />
              <span>
                A: No, payment is required before service. We accept card and
                digital payments only; cash is not accepted
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

  const GarmentCarePolicy = [
    {
      title: "Garment Care Policy",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              Every garment entrusted to us receives professional care based on
              its fabric type, care label and cleaning requirements.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We use suitable cleaning methods and industry best practices to
              protect your garments throughout the cleaning process.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Inspection before cleaning</li>
              <li>Appropriate washing methods.</li>
              <li>Quality checks before release.</li>
              <li>Professional packaging.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>
                Inform us of stains, damage, delicate or expensive fabrics.
              </li>
              <li>Check your garments upon collection.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              Each garment is inspected, sorted, cleaned using the appropriate
              method, pressed, quality checked and packaged before release.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Exceptions
            </h3>
            <p className='text-gray-600'>
              Some stains, fading or pre-existing damage may not be completely
              reversible.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: Can every stain be removed?</span>
              <br />
              <span>
                A: While we use professional stain-removal techniques, some
                stains or fabric damage may be permanent.
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

  const CookiePolicy = [
    {
      title: "Cookie Policy",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              Our website uses cookies to improve performance, remember your
              preferences and enhance your browsing experience.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We use cookies responsibly and provide information about how they
              are used.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Essential cookies keep the website functioning.</li>
              <li>Analytics cookies help us improve the website.</li>
              <li>Preference cookies remember your settings.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Review your browser cookie settings.</li>
              <li>Accept or decline optional cookies where available.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              You may manage or disable cookies through your browser settings,
              although some website features may not function correctly.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Exceptions
            </h3>
            <p className='text-gray-600'>
              Essential cookies required for website operation cannot always be
              disabled.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: Can I turn off cookies?</span>
              <br />
              <span>
                A: Yes. Most browsers allow you to manage or disable cookies.
              </span>
            </p>
          </div>

          <p>
            <strong>Need assistance?</strong> If you have any questions about
            this policy, contact our Customer Experience Team through our
            official phone number, email address or website contact form.
          </p>
        </div>
      ),
    },
  ];

  const WebsiteTermsOfUse = [
    {
      title: "Website Terms of Use",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              These terms govern your use of the Zebra Laundromat website and
              digital platforms.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We aim to provide a reliable, secure and informative online
              experience.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Access to current service information.</li>
              <li>Secure online browsing.</li>
              <li>Reliable online content.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Use the website lawfully.</li>
              <li>Do not interfere with website operations.</li>
              <li>Respect intellectual property.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              By using our website you agree to comply with these terms and all
              applicable laws.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Exceptions
            </h3>
            <p className='text-gray-600'>
              We may suspend access where misuse, fraud or security concerns are
              identified.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: Can these terms change?</span>
              <br />
              <span>
                A: Yes. Updated terms will be published on this website.
              </span>
            </p>
          </div>

          <p>
            <strong>Need assistance?</strong> If you have any questions about
            this policy, contact our Customer Experience Team through our
            official phone number, email address or website contact form.
          </p>
        </div>
      ),
    },
  ];

  const CustomerComplaintResolutionPolicy = [
    {
      title: "Customer Complaint Resolution Policy",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              We value your feedback and treat every complaint as an opportunity
              to improve.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We are committed to resolving complaints fairly, respectfully and
              as quickly as reasonably possible.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Acknowledgement of your complaint.</li>
              <li>Professional investigation.</li>
              <li>Regular updates where necessary.</li>
              <li>Fair outcome.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Provide complete information.</li>
              <li>Allow us time to investigate.</li>
              <li>Treat our team respectfully.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              Complaints are recorded, investigated, reviewed by the appropriate
              personnel and resolved in line with our customer service
              standards.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Exceptions
            </h3>
            <p className='text-gray-600'>
              Abusive language or fraudulent claims may affect how a complaint
              is handled.
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
                A: Contact us by phone, email, website or visit any Zebra
                Laundromat location.
              </span>
            </p>
          </div>

          <p>
            <strong>Need assistance?</strong> If you have any questions about
            this policy, contact our Customer Experience Team through our
            official phone number, email address or website contact form.
          </p>
        </div>
      ),
    },
  ];
  const CustomerCodeOfConduct = [
    {
      title: "Customer Code of Conduct",
      showUnderline: true,
      content: (
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Overview
            </h3>
            <p className='text-gray-600'>
              To ensure a welcoming, respectful and enjoyable experience for
              everyone using our facilities.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Our Commitment
            </h3>
            <p className='text-gray-600'>
              We are committed to maintaining a safe, inclusive and respectful
              environment for customers, visitors and employees.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              What You Can Expect
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Courteous assistance from our team.</li>
              <li>A clean and safe environment.</li>
              <li>Fair and respectful treatment.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Your Responsibilities
            </h3>
            <ol className='list-disc list-inside space-y-2 pl-5 leading-7'>
              <li>Treat employees and other customers respectfully.</li>
              <li>Follow staff instructions.</li>
              <li>Respect company property.</li>
            </ol>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              How we Handle This
            </h3>
            <p className='text-gray-600'>
              Our team will address concerns professionally and may intervene
              where behaviour disrupts other customers.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Exceptions
            </h3>
            <p className='text-gray-600'>
              Service may be refused in cases of abusive, threatening or illegal
              behaviour.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-[#EA2126] sm:text-xl'>
              Frequently Asked Question
            </h3>
            <p className='text-gray-600'>
              <span>Q: Can service be refused?</span>
              <br />
              <span>
                A: Yes, where behaviour compromises safety or violates this
                policy.
              </span>
            </p>
          </div>

          <p>
            <strong>Need assistance?</strong>Speak with any member of our team
            or contact Customer Experience through our official support
            channels.
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
          <Accordion items={PaymentPolicy} showImage={false} showDisc={false} />

          <Accordion
            items={GarmentCarePolicy}
            showImage={false}
            showDisc={false}
          />

          <Accordion items={CookiePolicy} showImage={false} showDisc={false} />

          <Accordion
            items={WebsiteTermsOfUse}
            showImage={false}
            showDisc={false}
          />

          <Accordion
            items={CustomerComplaintResolutionPolicy}
            showImage={false}
            showDisc={false}
          />

          <Accordion
            items={CustomerCodeOfConduct}
            showImage={false}
            showDisc={false}
          />
        </div>
      </section>
    </section>
  );
};
