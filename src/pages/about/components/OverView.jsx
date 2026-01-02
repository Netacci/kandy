import { CheckCircle, Award, Users, BookOpen } from 'lucide-react';

const OverView = () => {
  return (
    <section className='mb-16 py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-green-800 mb-4'>Our Story</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto mb-4'></div>
      </div>
      <p className='text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700'>
        Founded in 2018, Kandy Montessori School has been a beacon of
        child-centered education in our community. We are committed to nurturing
        each child&apos;s natural curiosity and potential through the
        time-tested Montessori method.
      </p>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-100'>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Our Mission
          </h3>
          <p className='mb-6 text-gray-700'>
            To provide a nurturing and stimulating environment that fosters
            independence, creativity, and a lifelong love for learning in every
            child.
          </p>
          <h3 className='text-xl font-semibold text-green-700 mb-4'>
            Our Values
          </h3>
          <ul className='space-y-3'>
            {[
              'Respect for the child',
              'Cultivating independence',
              'Fostering a love for learning',
              'Embracing diversity',
              'Community engagement',
              'Environmental stewardship',
            ].map((item, index) => (
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
