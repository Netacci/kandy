const Approach = () => {
  return (
    <section className='mb-16 py-8 bg-gray-50 rounded-lg'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-green-800 mb-4'>
          The Montessori Approach
        </h2>
        <div className='w-20 h-1 bg-green-600 mx-auto mb-4'></div>
      </div>
      <div className='grid md:grid-cols-3 gap-6'>
        {[
          {
            title: 'Prepared Environment',
            description:
              'Carefully designed classrooms that foster independence and exploration.',
          },
          {
            title: 'Mixed-Age Groupings',
            description:
              'Encouraging peer learning and social development across age groups.',
          },
          {
            title: 'Hands-On Learning',
            description:
              'Using specialized Montessori materials to concrete abstract concepts.',
          },
          {
            title: 'Freedom Within Limits',
            description:
              'Allowing children to choose activities while learning responsibility.',
          },
          {
            title: 'Individualized Learning',
            description:
              "Tailoring the educational experience to each child's unique needs and pace.",
          },
          {
            title: 'Holistic Development',
            description:
              'Nurturing cognitive, social, emotional, and physical growth.',
          },
        ].map((area, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1'>
            <h3 className='text-xl font-semibold text-green-700 mb-3'>
              {area.title}
            </h3>
            <p className='text-gray-700 leading-relaxed'>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
