import Hero from '../components/Hero';
import Characters from '../components/sections/Characters';
import Locations from '../components/sections/Locations';
import Episodes from '../components/sections/Episodes';
import Layout from '../components/common/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Characters />
      <Locations />
      <Episodes />
    </Layout>
  );
};

export default Home;
