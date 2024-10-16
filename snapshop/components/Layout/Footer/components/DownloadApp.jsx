import Image from 'next/image';
import qrCode from '@/public/assets/qr_code.png';
import googlePlay from '@/public/assets/google_play.png';
import appStore from '@/public/assets/app_store.png';
import facebookIcon from '@/public/assets/facebook_icon.png';
import twitterIcon from '@/public/assets/twitter_icon.png';
import instagramIcon from '@/public/assets/instagram_icon.png';
import linkedInIcon from '@/public/assets/linkedin_icon.png';

const DownloadApp = ({ t }) => {
  return (
    <div className="w-full px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">{t('downloadApp.heading')}</h2>
      <p className="mb-3 text-xs text-gray-400">{t('downloadApp.saveText')}</p>
      <div className="mb-4 flex">
        <Image
          src={qrCode}
          alt="QR Code"
          width={80}
          height={80}
          className="mb-2 w-auto h-auto mr-2"
        />
        <div>
          <Image
            src={googlePlay}
            alt="Google Play"
            width={100}
            height={40}
            className="mb-2 h-11 w-auto"
          />
          <Image
            src={appStore}
            alt="App Store"
            width={100}
            height={40}
            className="mb-2 h-11 w-auto"
          />
        </div>
      </div>
      <div className="flex space-x-6">
        <Image src={facebookIcon} alt="Facebook" className="ml-2 w-6 h-6" />
        <Image src={twitterIcon} alt="Twitter" className="mt-0.5 w-5 h-5" />
        <Image src={instagramIcon} alt="Instagram" className="w-6 h-6" />
        <Image src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default DownloadApp;
