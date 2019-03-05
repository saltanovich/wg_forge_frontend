import React from 'react';
import Order from './Order';

const Orders = ({ orders }) => orders.map(order => <Order key={order.id} {...order} />);

export default Orders;
