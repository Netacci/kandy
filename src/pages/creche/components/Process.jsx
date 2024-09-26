const Process = () => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>
        Join Our Creche Program
      </h2>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h3 className='text-2xl font-semibold text-green-700 mb-6'>
          Application Process
        </h3>
        <ol className='space-y-4'>
          {[
            'Schedule a tour of our facilities',
            'Complete the application form',
            'Submit required documents (birth certificate, immunization records)',
            'Pay the application fee (non-refundable)',
            'Receive admission decision',
            "Pay tuition deposit to secure your child's spot",
          ].map((step, index) => (
            <li key={index} className='flex items-start'>
              <div className='flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4'>
                <span className='text-green-600 font-semibold'>
                  {index + 1}
                </span>
              </div>
              <div>
                <p className='text-lg'>{step}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className='mt-8 bg-green-50 p-6 rounded-lg'>
          <h4 className='text-lg font-semibold text-green-700 mb-3'>
            Ready to Begin?
          </h4>
          <p className='mb-4'>
            Start your journey with Kandy Montessori School by scheduling a tour
            of our creche facilities.
          </p>
          <button className='bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300'>
            Schedule a Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
