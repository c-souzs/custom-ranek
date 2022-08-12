import React from 'react';

import * as C from './styles';

interface ProductUserCardSkeletonProps {
  amount: number
  width: string
  height: string
}

// eslint-disable-next-line max-len
const ProductUserCardSkeleton = ({ amount, height, width }: ProductUserCardSkeletonProps): JSX.Element => {
  const arrayAmount = Array(amount).fill(0);

  return (
    <>
      {arrayAmount.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} style={{ minWidth: '280px', position: 'relative', padding: '8px 16px' }}>
          <C.SkeletonImage h={height} w={width} />
          <div>
            <C.SkeletonText as="span" />
            <C.SkeletonTitle as="span" />
            <C.SkeletonText as="span" />
          </div>
          <C.ContainerSkeletonDelivery>
            <C.SkeletonTitle as="span" />
            <C.SkeletonText as="span" />
            <C.SkeletonText as="span" />
            <C.SkeletonText as="span" />
            <C.SkeletonText as="span" />
          </C.ContainerSkeletonDelivery>
          <C.ContainerSkeletonButton>
            <C.SkeletonButton as="span" />
          </C.ContainerSkeletonButton>
        </li>
      ))}
    </>
  );
};

export default ProductUserCardSkeleton;
