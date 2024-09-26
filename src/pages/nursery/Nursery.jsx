import Layout from '../../components/layout/Layout';
import Hero from '../../components/Hero/Hero';
import Program from '../../components/program/Program';
import {
  preSchoolLearningAreaData,
  preSchoolProgramData,
} from '../../config/nurseryData';
import Gallery from '../../components/gallery/Gallery';
import LearningArea from '../../components/learningArea/LearningArea';

const Nursery = () => {
  return (
    <Layout>
      <div className='min-h-screen bg-lime-50 text-gray-800 font-sans'>
        <Hero
          title='Our Preschool Program'
          alt='Preschool Classroom'
          image='/api/placeholder/1920/1080'
        />
        <main className='container mx-auto px-4 py-12'>
          <Program
            title='Nurturing Young Learners'
            description='Our preschool program at Kandy Montessori School provides a stimulating
        and nurturing environment for children aged 2 to 5 years. We focus on
        fostering independence, creativity, and a love for learning through
        hands-on experiences and age-appropriate activities.'
            data={preSchoolProgramData}
            ageGroup='Age Group: 2 - 5 years'
            hrs='Hours: 8:00 AM - 3:00 PM'
            session='Term-based enrollment'
          />
          <LearningArea
            title='Key Learning Areas'
            data={preSchoolLearningAreaData}
          />
          <Gallery title='Life in Our Preschool' />

          {/* Contact Information */}
          {/* <section>
            <h2 className='text-3xl font-light text-green-800 mb-6'>
              Get in Touch
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='mb-4'>
                Interested in our preschool program? Contact us to learn more!
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

export default Nursery;
