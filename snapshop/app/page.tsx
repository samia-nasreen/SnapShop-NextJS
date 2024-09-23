// import BuyNowSection from "@/components/Home/BuyNowSection/BuyNowSection";
import CategorySection from "@/components/Home/CategorySection/CategorySection";
import ExploreSection from "@/components/Home/ExploreSection/ExploreSection";
import FlashSalesSection from "@/components/Home/FlashSalesSection/FlashSalesSection";
import NewArrivalSection from "@/components/Home/NewArrivalSection/NewArrivalSection";
import ServicesSection from "@/components/Home/ServicesSection/ServicesSection";
import SliderSection from "@/components/Home/SliderSection/SliderSection";
import TopRatedSection from "@/components/Home/TopRatedSection/TopRatedSection";

const HomePage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28">
      <SliderSection />
      <FlashSalesSection />
      <CategorySection />
      <TopRatedSection />
      {/* <BuyNowSection /> */}
      <ExploreSection />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
