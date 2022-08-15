import React from 'react';
import {
  SkeletonButton, SkeletonImage, SkeletonText, SkeletonTitle,
} from '../../../styles/globalStyles';

import * as C from './styles';

interface IProductUserCardSkeletonProps {
  amount: number
  width: string
  height: string
}

// eslint-disable-next-line max-len
const ProductUserCardSkeleton = ({ amount, height, width }: IProductUserCardSkeletonProps): JSX.Element => {
  const arrayAmount = Array(amount).fill(0);

  return (
    <>
      {arrayAmount.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} style={{ minWidth: '280px', position: 'relative', padding: '8px 16px' }}>
          <SkeletonImage h={height} w={width} />
          <div>
            <SkeletonText as="span" />
            <SkeletonTitle as="span" />
            <SkeletonText as="span" />
          </div>
          <C.ContainerSkeletonDelivery>
            <SkeletonTitle as="span" />
            <SkeletonText as="span" />
            <SkeletonText as="span" />
            <SkeletonText as="span" />
            <SkeletonText as="span" />
          </C.ContainerSkeletonDelivery>
          <C.ContainerSkeletonButton>
            <SkeletonButton as="span" />
          </C.ContainerSkeletonButton>
        </li>
      ))}
    </>
  );
};

export default ProductUserCardSkeleton;
