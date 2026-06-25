function Services() {
  return (
    <section id='services' className='scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#002590]'>
            Our Services
          </p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
            Flexible care for every routine.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-600'>
            From everyday laundry to specialty garments, our team delivers
            thoughtful care with dependable pickup and delivery options.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {[
            [
              "Wash & Fold",
              "Reliable weekly laundry support for busy schedules.",
            ],
            [
              "Dry Cleaning",
              "Professional finishing for shirts, suits, and delicate pieces.",
            ],
            [
              "Pickup & Delivery",
              "Convenient scheduling that fits your calendar.",
            ],
          ].map(([title, description]) => (
            <article
              key={title}
              className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
            >
              <h3 className='text-xl font-semibold text-slate-900'>{title}</h3>
              <p className='mt-3 text-sm leading-7 text-slate-600'>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
