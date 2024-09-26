import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='min-h-screen mt-20 bg-lime-50 flex flex-col items-center justify-center p-4 text-center'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-6xl md:text-8xl font-light text-green-800 mb-6'>
            404
          </h1>
          <h2 className='text-2xl md:text-3xl font-light text-green-600 mb-8'>
            Oops! This page seems to be on a learning journey.
          </h2>

          <div className='mb-12'>
            <svg
              className='w-64 h-64 mx-auto'
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='100' cy='100' r='80' fill='#E7F3E5' />
              <rect
                x='70'
                y='80'
                width='60'
                height='60'
                rx='5'
                fill='#4CAF50'
              />
              <rect
                x='80'
                y='90'
                width='40'
                height='40'
                rx='3'
                fill='#81C784'
              />
              <circle cx='100' cy='65' r='15' fill='#4CAF50' />
            </svg>
          </div>

          <p className='text-xl text-gray-700 mb-8'>
            Let&apos;s guide you back to our Montessori classroom where the real
            exploration begins!
          </p>

          <Link
            to='/'
            className='inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out'
          >
            <Home className='mr-2' size={20} />
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
