import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const ProductCard = ({ id, name, price, image, addToCart }) => {
  return (
    <Grid item xs={3} key={id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`images/${image}`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'$' + price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"
            onClick={() => addToCart(name, price, id)}
          >Add to Cart</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
