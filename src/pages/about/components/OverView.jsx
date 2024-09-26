import { CheckCircle, Award, Users, BookOpen } from 'lucide-react';

const OverView = () => {
  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-light text-green-800 mb-6'>Our Story</h2>
      <p className='text-lg mb-6'>
        Founded in 2018, Kandy Montessori School has been a beacon of
        child-centered education in our community. We are committed to nurturing
        each child&apos;s natural curiosity and potential through the
        time-tested Montessori method.
      </p>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Our Mission
          </h3>
          <p className='mb-4'>
            To provide a nurturing and stimulating environment that fosters
            independence, creativity, and a lifelong love for learning in every
            child.
          </p>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Our Values
          </h3>
          <ul className='space-y-2'>
            {[
              'Respect for the child',
              'Cultivating independence',
              'Fostering a love for learning',
              'Embracing diversity',
              'Community engagement',
              'Environmental stewardship',
            ].map((item, index) => (
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
              <Award size={24} className='text-green-500 mr-3' />
              <span>Established in 2018</span>
            </li>
            <li className='flex items-center'>
              <Users size={24} className='text-green-500 mr-3' />
              <span>Serving children aged 3 months to 11 years</span>
            </li>
            <li className='flex items-center'>
              <BookOpen size={24} className='text-green-500 mr-3' />
              <span>Certified teachers</span>
            </li>
            <li className='flex items-center'>
              <Users size={24} className='text-green-500 mr-3' />
              <span>Over 400 graduates since inception</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OverView;
