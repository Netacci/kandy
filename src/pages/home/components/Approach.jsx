import { CheckCircle } from 'lucide-react';
import Appp from '../../../assets/app.png';

const Approach = () => {
  const approaches = [
    'Child-Centered Learning',
    'Mixed-Age Classrooms',
    'Hands-On Materials',
    'Self-Directed Activity',
  ];

  return (
    <section
      id='approach'
      className='py-20 bg-gradient-to-b from-white to-gray-50'
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <div className='mb-6'>
              <span className='inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4'>
                Our Philosophy
              </span>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                Our Montessori Approach
              </h2>
              <div className='w-20 h-1 bg-green-600 mb-6'></div>
            </div>
            <p className='text-lg text-gray-700 mb-10 leading-relaxed'>
              At Kandy Montessori, we embrace the child&apos;s natural curiosity
              and drive for independence. Our carefully prepared environments
              and trained educators guide each child&apos;s unique developmental
              journey, fostering a love for learning that lasts a lifetime.
            </p>
            <ul className='space-y-5'>
              {approaches.map((item, index) => (
                <li key={index} className='flex items-start group'>
                  <div className='flex-shrink-0 mt-1'>
                    <CheckCircle className='w-6 h-6 text-green-600 mr-4 group-hover:scale-110 transition-transform' />
                  </div>
                  <span className='text-gray-800 text-lg font-medium'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:w-1/2 relative'>
            <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300'>
              <img
                src={Appp}
                alt='Montessori Classroom'
                className='w-full h-auto'
              />
            </div>
            {/* Decorative elements */}
            <div className='hidden lg:block absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-green-200 to-lime-200 rounded-full opacity-40 blur-xl'></div>
            <div className='hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full opacity-40 blur-xl'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
