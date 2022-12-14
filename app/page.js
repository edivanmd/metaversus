import { Footer, Navbar, ProgressBar } from '../components';
import { About, Explore, Hero, GetStarted, Feedback, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-dark-blue overflow-hidden">
    <ProgressBar />
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
