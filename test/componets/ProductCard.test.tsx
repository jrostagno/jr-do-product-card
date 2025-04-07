import React from 'react';

import { render } from '@testing-library/react';

import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('Debe mostrar el componente ', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>
        {() => <h1>Product card</h1>}
      </ProductCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Debe incrementar el contador', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(2)}> increase</button>
          </>
        )}
      </ProductCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
