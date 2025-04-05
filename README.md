# JR-product- card

Este es un paquete de pruebas de un despliegue npm

# JR -product- card

```

import {ProductCard,ProductImage,ProductTitle,ProductButtons} from 'jr-product-card'
```

```
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






```
