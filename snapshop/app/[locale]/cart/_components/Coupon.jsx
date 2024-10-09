import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

const Coupon = () => {
  return (
    <div className="flex items-center justify-between">
      <Input placeholder="Coupon Code" fontSize="text-sm" variant="bordered" />
      <Button text="Apply Coupon" onClick={null} className="ml-4 -mt-6" />
    </div>
  );
};

export default Coupon;
