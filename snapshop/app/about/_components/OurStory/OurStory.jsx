import Heading from "@/components/UI/Heading";
import Image from "next/image";
import storyImage from "@/public/assets/story.png";

const OurStory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-5 pb-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Heading
            text="Our Story"
            fontSize="text-4xl md:text-5xl lg:text-6xl"
          />
          <p className="text-gray-700 font-medium mb-6 md:mb-8 max-w-[510px]">
            Launched in 2015, SnapShop is South Asia&apos;s premier online
            shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service
            solutions, SnapShop has 10,500 sellers and 300 brands and serves 3
            million customers across the region.
          </p>
          <p className="text-gray-700 font-medium max-w-[510px]">
            SnapShop has more than 1 Million products to offer, growing very
            fast. SnapShop offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src={storyImage}
            alt="Our Story"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
