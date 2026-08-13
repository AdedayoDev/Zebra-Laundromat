interface GetHelpPolicyHeaderProps {
  header: string;
  body: string;
}

const GetHelpPolicyHeader = ({ header, body }: GetHelpPolicyHeaderProps) => {
  return (
    <section id="getHelpPolicyHeader" className='bg-[#002598] py-8 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl py-6 sm:py-8 lg:py-10 space-y-2 sm:space-y-4 lg:space-y-6'>
        <h1 className='text-3xl font-bold text-[#FFFFFF] sm:text-4xl'>
          {header}
        </h1>

        <p className='text-lg text-[#FFFFFFB2]/70 sm:text-xl w-3xl'>{body}</p>
      </div>
    </section>
  );
};

export default GetHelpPolicyHeader;
