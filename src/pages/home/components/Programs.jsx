import { ArrowRight, Baby, GraduationCap, BookOpen } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      name: 'Creche',
      age: '3 months - 2 years',
      description: 'A nurturing environment for our youngest learners with specialized care and early developmental support',
      link: '/creche',
      icon: Baby,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Pre-School (Nursery)',
      age: '2 - 6 years',
      description: 'Fostering independence and early learning skills through play-based Montessori methods',
      link: '/pre-school',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
    },
    {
      name: 'Grade School (Primary)',
      age: '6 - 11 years',
      description: 'Building a strong foundation for lifelong learning with comprehensive academic programs',
      link: '/grade-school',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section id='programs' className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Our Educational Programs
          </h2>
          <div className='w-24 h-1 bg-green-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Discover our comprehensive range of programs designed to nurture and develop your child at every stage of their educational journey
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className={`${program.bgColor} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 ${program.borderColor} relative overflow-hidden group`}
              >
                {/* Decorative background element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${program.color} text-white shadow-lg`}>
                  <IconComponent className='w-8 h-8' />
                </div>
                
                {/* Content */}
                <h3 className={`text-2xl font-bold ${program.textColor} mb-3 relative z-10`}>
                  {program.name}
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${program.textColor} ${program.bgColor} border ${program.borderColor} mb-4`}>
                  {program.age}
                </div>
                <p className='mb-6 text-gray-700 leading-relaxed relative z-10'>
                  {program.description}
                </p>
                <a
                  href={program.link}
                  className={`inline-flex items-center font-semibold ${program.textColor} hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 relative z-10`}
                >
                  Learn More
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
