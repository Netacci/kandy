import Layout from '../../components/layout/Layout';
import Hero from '../../components/Hero/Hero';
import Program from '../../components/program/Program';
import { crecheProgramData } from './../../config/crecheData';
import Schedule from './components/Schedule';
import Process from './components/Process';
import Gallery from '../../components/gallery/Gallery';

const Creche = () => {
  return (
    <Layout>
      <div className='min-h-screen bg-lime-50 text-gray-800 font-sans'>
        <Hero
          title='Our Creche Program'
          image='/api/placeholder/1920/1080'
          alt='Creche Classroom'
        />

        {/* Main Content */}
        <main className='container mx-auto px-4 py-12'>
          {/* Program Overview */}
          <Program
            title='Nurturing Young Minds'
            description='Our creche program at Kandy Montessori School provides a warm,
              loving environment for children aged 3 months to 2 years. We focus
              on creating a safe, stimulating space where infants and toddlers
              can explore, learn, and grow at their own pace.'
            data={crecheProgramData}
            ageGroup='Age Group: 3 months - 2 years'
            hrs='Hours: 7:30 AM - 3:00 PM'
            session='Year-round enrollment'
          />

          <Schedule />
          <Process />

          <Gallery title='Life in Our Creche' />

          {/* <section>
            <h2 className='text-3xl font-light text-green-800 mb-6'>
              Get in Touch
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='mb-4'>
                Have questions about our creche program? We&apos;re here to
                help!
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Phone size={20} className='text-green-500 mr-2' />
                  <span>(234) 123-4567</span>
                </li>
                <li className='flex items-center'>
                  <Mail size={20} className='text-green-500 mr-2' />
                  <span>creche@kandymontessori.edu.ng</span>
                </li>
              </ul>
              <button className='mt-6 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300'>
                Schedule a Tour
              </button>
            </div>
          </section> */}
        </main>
      </div>
    </Layout>
  );
};

export default Creche;
