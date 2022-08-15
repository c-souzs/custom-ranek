import React from 'react';
import { SkeletonImage, SkeletonText, SkeletonTitle } from '../../../styles/globalStyles';

interface IProductSampleCardSkeletonProps {
  amount: number
  width: string
  height: string
}

// eslint-disable-next-line max-len
const ProductSampleCardSkeleton = ({ amount, height, width }: IProductSampleCardSkeletonProps): JSX.Element => {
  const arrayAmount = Array(amount).fill(0);

  return (
    <>
      {arrayAmount.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} style={{ minWidth: '280px' }}>
          <SkeletonImage h={height} w={width} />
          <SkeletonTitle as="span" />

          <SkeletonText as="span" />
          <SkeletonText as="span" />
          <SkeletonText as="span" />
        </li>
      ))}
    </>
  );
};

export default ProductSampleCardSkeleton;
