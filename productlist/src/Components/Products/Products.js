import React, { useState } from 'react';
import { phoneData } from './productData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const [items, setItems] = useState(phoneData);

  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };

  const incQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };

  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>
      {items.map((item) => (
        <div className='d-inline-flex' key={item.id} >
          <Card
            className="shadow p-3 m-2 bg-body rounded"
            style={{ width: '13rem' }}
          >
            <Card.Img
              style={{ height: '11rem' }}
              className='p-2'
              variant="top"
              src={require(`./assets/${item.image}.jpg`)}
            />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>{item.brand}</Card.Text>
              <Card.Text>Storage: {item.storage}</Card.Text>
              <Card.Text>Ram: {item.ram}</Card.Text>
              <h5>Price: ₹{item.price} </h5>
              <div>
                <p>
                  Qty:
                  <Button onClick={() => decQty(item.id)} className="m-1">
                    -
                  </Button>
                  {item.qty}
                  <Button onClick={() => incQty(item.id)} className="m-1">
                    +
                  </Button>
                </p>
              </div>
              <Button>Add to cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
