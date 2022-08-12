import React from 'react';

import * as C from './styles';

interface ProductSkeletonProps {
  width: string
  height: string
}

const ProductSkeleton = ({ height, width }: ProductSkeletonProps): JSX.Element => (
  <div>
    <C.HeaderSkeleton />
    <C.ContainerContent className="container">
      <div>
        <C.SkeletonImage h={height} w={width} />
        <C.ContainerButtons>
          <C.SkeletonButton />
          <C.SkeletonButton />
        </C.ContainerButtons>
      </div>
      <div>
        <C.SkeletonTitle />
        <C.SkeletonText />
        <C.SkeletonText />
        <C.SkeletonText />
        <C.SkeletonText />

        <C.SkeletonBigButton />
      </div>
    </C.ContainerContent>
  </div>
);

export default ProductSkeleton;
