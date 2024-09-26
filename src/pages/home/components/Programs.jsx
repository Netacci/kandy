import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      name: 'Creche',
      age: '3 months - 2 years',
      description: 'A nurturing environment for our youngest learners',
      link: '/creche',
    },
    {
      name: 'Pre-School (Nursery)',
      age: '2 - 6 years',
      description: 'Fostering independence and early learning skills',
      link: '/pre-school',
    },
    {
      name: 'Grade School (Primary)',
      age: '6 - 11 years',
      description: 'Building a strong foundation for lifelong learning',
      link: '/grade-school',
    },
  ];

  return (
    <section id='programs' className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-light text-center text-green-800 mb-12'>
          Our Programs
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {programs.map((program, index) => (
            <div
              key={index}
              className='bg-lime-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2'
            >
              <h3 className='text-2xl font-semibold text-green-700 mb-2'>
                {program.name}
              </h3>
              <p className='text-sm text-gray-600 mb-4'>{program.age}</p>
              <p className='mb-6 text-gray-700'>{program.description}</p>
              <a
                href={program.link}
                className='inline-flex items-center text-green-600 hover:text-green-700 transition duration-300'
              >
                Learn more <ArrowRight className='ml-2 w-4 h-4' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
