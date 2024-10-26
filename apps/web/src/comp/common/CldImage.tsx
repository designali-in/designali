'use client';

import { CldImage as NextCldImage } from 'next-cloudinary';

const CldImage = (props: any) => {
  return <NextCldImage {...props} />;
};

export default CldImage;
