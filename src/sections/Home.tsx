function Home() {
  return (
    <section
      id='home'
      className='scroll-mt-24 bg-gradient-to-br from-slate-50 to-white px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
        <div className='max-w-2xl'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#002590]'>
            Fast, friendly laundry care
          </p>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            Fresh clothes, effortless pickup, and premium service.
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Zebra Laundromat helps busy households and professionals keep their
            routines simple with reliable, high-quality care.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
          <p className='text-sm font-semibold text-[#002590]'>Why choose us</p>
          <ul className='mt-4 space-y-3 text-sm text-slate-600'>
            <li>• Same-day turnaround for urgent loads</li>
            <li>• Eco-conscious washing and folding</li>
            <li>• Convenient booking with transparent pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
