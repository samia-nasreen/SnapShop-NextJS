import JustForYou from '@/app/wishlist/_components/JustForYou';
import Wishlist from '@/app/wishlist/_components/Wishlist';

const WishlistPage = () => {
  return (
    <div className="px-8 sm:px-8 md:px-16 lg:px-28">
      <Wishlist />
      <JustForYou />
    </div>
  );
};

export default WishlistPage;
