/* eslint-disable react/prop-types */
import { CheckCircle, Users, Clock, Calendar } from 'lucide-react';

const Program = ({ title, description, data, ageGroup, hrs, session }) => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>{title}</h2>
      <p className='text-lg mb-6'>{description}</p>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Our Approach
          </h3>
          <ul className='space-y-2'>
            {data.map((item, index) => (
              <li key={index} className='flex items-center'>
                <CheckCircle size={20} className='text-green-500 mr-2' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Quick Facts
          </h3>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <Users size={24} className='text-green-500 mr-3' />
              <span>{ageGroup}</span>
            </li>
            <li className='flex items-center'>
              <Clock size={24} className='text-green-500 mr-3' />
              <span>{hrs}</span>
            </li>
            <li className='flex items-center'>
              <Calendar size={24} className='text-green-500 mr-3' />
              <span>{session}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Program;
