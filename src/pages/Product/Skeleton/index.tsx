import React from 'react';
import { SkeletonImage, SkeletonText, SkeletonTitle } from '../../../styles/globalStyles';

import * as C from './styles';

interface IProductSkeleton {
  width: string
  height: string
}

const ProductSkeleton = ({ height, width }: IProductSkeleton): JSX.Element => (
  <div>
    <C.HeaderSkeleton />
    <C.ContainerContent className="container">
      <div>
        <SkeletonImage h={height} w={width} />
        <C.ContainerButtons>
          <C.SkeletonButton />
          <C.SkeletonButton />
        </C.ContainerButtons>
      </div>
      <C.ContainerDataProduct>
        <SkeletonTitle />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />

        <C.SkeletonBigButton />
      </C.ContainerDataProduct>
    </C.ContainerContent>
  </div>
);

export default ProductSkeleton;
