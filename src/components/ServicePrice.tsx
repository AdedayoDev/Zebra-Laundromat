interface ServicePriceProps {
  price: string;
  priceDescription: string;
  note: string;
}

function ServicePrice({ price, priceDescription, note }: ServicePriceProps) {
  return (
    <div className='mt-8 rounded-2xl bg-[#f7fbff] p-4'>
      <div className='flex flex-wrap items-end gap-2'>
        <span className='text-3xl font-bold text-[#002590]'>₦{price}</span>
        <span className='pb-1 text-sm text-black/70'>{priceDescription}</span>
      </div>
      <p className='mt-2 text-sm italic text-black/70'>{note}</p>
    </div>
  );
}

export default ServicePrice;
