import Hero from './components/Hero';
import Approach from './components/Approach';
import Programs from './components/Programs';
import Banner from './components/Banner';
import Extra from './components/Extra';
import Layout from '../../components/layout/Layout';
import HomePageEvents from './components/Events';

const Home = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Approach />
        <Programs />
        <Extra />
        <HomePageEvents/>
        <Banner />
      </main>
    </Layout>
  );
};

export default Home;
