import Image from 'next/image';

interface ImageGridProps {
  image: string;
  title: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ image, title }) => {
  return (
    <div className="flex flex-grow w-full md:w-2/3 h-[350px] md:h-[615px] mb-6 md:mb-0">
      <div className="flex flex-col justify-between w-[150px] h-full space-y-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-[80px] md:h-[135px] w-1/2 md:w-full border-[1px] rounded-sm"
          >
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="w-full h-full object-contain rounded-sm shadow-md p-6"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 border-[1px] rounded-sm h-full -ml-16 md:ml-6">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-contain rounded-sm shadow-md p-12"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
