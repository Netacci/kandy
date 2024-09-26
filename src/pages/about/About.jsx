import Layout from '../../components/layout/Layout';
import Hero from '../../components/Hero/Hero';
import OverView from './components/OverView';
import Approach from './components/Approach';
import Team from './components/Team';
import Community from './components/Community';

const About = () => {
  return (
    <Layout>
      <div className='min-h-screen bg-lime-50 text-gray-800 font-sans'>
        <Hero
          title='About Us'
          alt='Kandy Montessori School'
          image='/api/placeholder/1920/1080'
        />

        <main className='container mx-auto px-4 py-12'>
          <OverView />
          <Approach />

          <Team />
          <Community />
        </main>
      </div>
    </Layout>
  );
};

export default About;
