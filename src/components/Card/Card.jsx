import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const Card1= ({product}) => {





  return (


// {/* <article className="card bg-blue-50  p-4 border w-48 " key={product.id}>
// <img src={product.image} alt={product.title} className="max-w-98 max-h-72 object-fit mb-4" />
// <div className="details-div">
//   <div className="title-price mb-2">
//     <p className="text-lg font-semibold">{product.title}</p>
//     <p className="text-gray-700">${product.price.toFixed(2)}</p> {/* Format price to 2 decimal places */}
//   </div>
  
//   
// </div>
// </article> */}

<Card sx={{ maxWidth: 345 }}>
<CardMedia
  sx={{ height: 200 }}
  image={product.image}
  title="green iguana"
  className="p-4 "
/>
<CardContent>
  <Typography gutterBottom variant="subtitle2" component="div">
    {product.title}
  </Typography>
  <Typography gutterBottom variant="h6" component="div">
    {"₹ "+product.price*60}
  </Typography>
</CardContent>
<CardActions>
<Button variant="contained" color="warning" >Add to cart</Button>
</CardActions>
</Card>




  );
};

export default Card1;
