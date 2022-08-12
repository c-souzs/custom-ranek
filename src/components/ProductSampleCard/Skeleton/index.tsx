import React from 'react';

import * as C from './styles';

interface ProductSampleCardSkeletonProps {
  amount: number
  width: string
  height: string
}

// eslint-disable-next-line max-len
const ProductSampleCardSkeleton = ({ amount, height, width }: ProductSampleCardSkeletonProps): JSX.Element => {
  const arrayAmount = Array(amount).fill(0);

  return (
    <>
      {arrayAmount.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} style={{ minWidth: '280px' }}>
          <C.SkeletonImage h={height} w={width} />
          <C.SkeletonTitle as="span" />

          <C.SkeletonText as="span" />
          <C.SkeletonText as="span" />
          <C.SkeletonText as="span" />
        </li>
      ))}
    </>
  );
};

export default ProductSampleCardSkeleton;
