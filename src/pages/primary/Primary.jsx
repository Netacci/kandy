import Layout from '../../components/layout/Layout';
import Hero from '../../components/Hero/Hero';
import Program from '../../components/program/Program';
import {
  gradeSchoolLearningAreaData,
  gradeSchoolProgramData,
} from '../../config/primaryData';
import LearningArea from '../../components/learningArea/LearningArea';

import Gallery from '../../components/gallery/Gallery';
import ExtraC from './components/ExtraC';

const Primary = () => {
  return (
    <Layout>
      <div className='min-h-screen bg-lime-50 text-gray-800 font-sans'>
        <Hero
          title='Our Grade School Program'
          alt='Grade School Classroom'
          image='/api/placeholder/1920/1080'
        />

        {/* Main Content */}
        <main className='container mx-auto px-4 py-12'>
          <Program
            title=' Empowering Young Minds'
            description='   Our grade school program at Kandy Montessori School provides a
              comprehensive and engaging educational experience for children
              aged 6 to 11 years. We focus on developing critical thinking
              skills, fostering creativity, and nurturing a lifelong love for
              learning.'
            data={gradeSchoolProgramData}
            ageGroup='Age Group: 6 - 11 years'
            hrs='Hours: 8:00 AM - 3:30 PM'
            session='Three terms per academic year'
          />
          <LearningArea
            title='   Comprehensive Curriculum'
            data={gradeSchoolLearningAreaData}
          />

          {/* Extracurricular Activities */}
          <ExtraC />

          <Gallery title='  Life in Our Grade School' />

          {/* <section>
            <h2 className='text-3xl font-light text-green-800 mb-6'>
              Get in Touch
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='mb-4'>
                Interested in our grade school program? Contact us to learn
                more!
              </p>
              <button className='mt-2 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300'>
                Schedule a Tour
              </button>
            </div>
          </section> */}
        </main>
      </div>
    </Layout>
  );
};

export default Primary;
