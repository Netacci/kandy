/* eslint-disable react/prop-types */
import { CheckCircle, Users, Clock, Calendar } from 'lucide-react';

const Program = ({ title, description, data, ageGroup, hrs, session }) => {
  return (
    <section className='mb-16 py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-green-800 mb-4'>{title}</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto mb-4'></div>
      </div>
      <p className='text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700'>{description}</p>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Our Approach
          </h3>
          <ul className='space-y-3'>
            {data.map((item, index) => (
              <li key={index} className='flex items-center'>
                <CheckCircle size={20} className='text-green-500 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Quick Facts
          </h3>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <Users size={24} className='text-green-500 mr-3' />
              <span className='text-gray-700'>{ageGroup}</span>
            </li>
            <li className='flex items-center'>
              <Clock size={24} className='text-green-500 mr-3' />
              <span className='text-gray-700'>{hrs}</span>
            </li>
            <li className='flex items-center'>
              <Calendar size={24} className='text-green-500 mr-3' />
              <span className='text-gray-700'>{session}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Program;
