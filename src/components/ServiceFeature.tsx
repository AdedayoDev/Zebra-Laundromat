import { Check } from "lucide-react";

interface ServiceFeatureProps {
  text: string;
}

function ServiceFeature({ text }: ServiceFeatureProps) {
  return (
    <div className='flex items-start gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0'>
      <div className='mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#002590]'>
        <Check className='h-4 w-4 text-white' strokeWidth={2.5} />
      </div>
      <span className='text-sm text-slate-700'>{text}</span>
    </div>
  );
}

export default ServiceFeature;
