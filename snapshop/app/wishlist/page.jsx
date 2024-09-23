import JustForYou from "@/components/Wishlist/JustForYou";
import Wishlist from "@/components/Wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <div className="px-8 sm:px-8 md:px-16 lg:px-28">
      <Wishlist />
      <JustForYou />
    </div>
  );
};

export default WishlistPage;
