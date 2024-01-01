import React from 'react'
import styled from 'styled-components';
import { ProductItemWrapper } from '../styles/ProductItemWrapper';

function ProductItem({children}:any) {
  return (
    <ProductItemWrapper >
        {children}
    </ProductItemWrapper>

  )
}

export default ProductItem