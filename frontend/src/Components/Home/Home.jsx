import Navbar from "./Navbar";
import MainHome from "./MainHome";
import OverviewSection from "./Overview";
import BenefitsSection from "./BenefitsSection";
import ParentBenefit from "./ParentBenefit";
import ContactSection from "./ContactSection";
import Questions from "./Questions";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <MainHome />
      <OverviewSection />
      <BenefitsSection />
      <ParentBenefit />
      <ContactSection />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
