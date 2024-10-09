import OurStory from '@/app/[locale]/about/_components/OurStory/OurStory';
import Stats from '@/app/[locale]/about/_components/Stats/Stats';
import Team from '@/app/[locale]/about/_components/Team/Team';
import Breadcrumb from '@/components/UI/Breadcrumb';
import Services from '@/components/Home/ServicesSection/ServicesSection';

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28">
      <Breadcrumb parts={['Home', 'About']} className="ml-4" />
      <OurStory />
      <Stats />
      <Team />
      <Services />
    </div>
  );
};

export default About;
