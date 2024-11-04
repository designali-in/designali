'use client';

import { CldVideoPlayer as NextCldImage } from 'next-cloudinary';

const CldVideoPlayer = (props: any) => {
  return <NextCldImage {...props} />;
};

export default CldVideoPlayer;
