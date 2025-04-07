import React from 'react';

import { render } from '@testing-library/react';

import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/product';

describe('ProductImage', () => {
  test('Debe mostrar el componente con la Imagen  personalizado', () => {
    const { asFragment } = render(
      <ProductImage img="https:://hola.jpg" className="custom-title" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la imagen del producto', () => {
    const product = render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(product.rerender).toMatchSnapshot();
  });
});
