const Banner = () => {
  return (
    <section
      id='admissions'
      className='min-h-screen flex items-center bg-lime-50'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl font-light text-green-800 mb-6'>
            Join Our Community
          </h2>
          <p className='text-xl mb-8'>
            We&apos;re excited to welcome new families to Kandy Montessori. Our
            admissions process is designed to ensure a good fit for both your
            child and our school community.
          </p>
          <a
            href='#'
            className='inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300'
          >
            Start Your Application
          </a>
          <div className='mt-16 grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Visit Us',
                description:
                  'Schedule a tour to experience our vibrant learning environment',
              },
              {
                title: 'Apply',
                description:
                  'Complete our online application to begin the admissions process',
              },
              {
                title: 'Enroll',
                description:
                  "Once accepted, secure your child's spot in our program",
              },
            ].map((step, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-green-700 mb-2'>
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
