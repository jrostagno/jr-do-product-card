import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '2',
  title: 'Coffee mug2',
  img: './coffeemug2.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues={{
          maxCount: 10,
          count: 4,
        }}
      >
        {({ reset, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
