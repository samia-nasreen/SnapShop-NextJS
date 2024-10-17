'use client';

import { useState } from 'react';
import Color from './Color';
import { useTranslations } from 'next-intl';

type ColorType = 'blue' | 'red';

const Colors: React.FC = () => {
  const t = useTranslations('productDetails');
  const [selectedColor, setSelectedColor] = useState<ColorType>('blue');

  const handleColorChange = (color: ColorType) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex space-x-3 items-center">
      <span className="md:text-lg text-gray-900 mr-2">{t('color')}:</span>
      <Color
        color="blue"
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
      <Color
        color="red"
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

export default Colors;
