import React from 'react';

import { render } from '@testing-library/react';
import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('Debe mostrar el componente con el titulo personalizado', () => {
    const { asFragment } = render(
      <ProductTitle title="Custom Product" className="custom-title" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    const product = render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(product.rerender).toMatchSnapshot();
  });
});
