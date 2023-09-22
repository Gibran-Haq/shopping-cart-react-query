import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { fetchProducts } from './api-mock/products-api';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const addToCart = (name, price, id) => {

   let found = false;
   
   cart.forEach(item => {
      if (item.id === id) {
        found = true
      }
    });

    if (found) {
      const updatedCart = cart.map(item => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item
      })
      setCart([...updatedCart])
      return;
    }
    
    const newItem = {
      id, 
      name,
      price,
      quantity: 1,
    }

    setCart([...cart, newItem]);

  };

  return (
    <>
      <h1>Hello! Here are the available products:</h1>
      <Grid container spacing={2}>
        {products.map(({ id, name, price, image }) => (
          <ProductCard
            id={id}
            name={name}
            price={price}
            image={image}
            addToCart={addToCart}
          />
        ))}
      </Grid>
      {cart.length > 0 && <Cart cart={cart} />}
    </>
  );
};

export default App;
