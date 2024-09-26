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
      className='py-16 bg-gradient-to-b from-green-50 to-white'
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-light text-green-800 mb-6'>
              Our Montessori Approach
            </h2>
            <p className='text-lg text-gray-700 mb-8'>
              At Kandy Montessori, we embrace the child&apos;s natural curiosity
              and drive for independence. Our carefully prepared environments
              and trained educators guide each child&apos;s unique developmental
              journey.
            </p>
            <ul className='space-y-4'>
              {approaches.map((item, index) => (
                <li key={index} className='flex items-center'>
                  <CheckCircle className='w-6 h-6 text-green-500 mr-3' />
                  <span className='text-gray-800'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:w-1/2 relative'>
            <img
              src={Appp}
              alt='Montessori Classroom'
              className='rounded-lg shadow-xl z-10 relative'
            />
            <div className='hidden lg:block absolute -bottom-8 -left-8 w-48 h-48 bg-lime-200 rounded-full opacity-50'></div>
            <div className='hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-green-300 rounded-full opacity-50'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
