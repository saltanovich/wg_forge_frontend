import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Order = ({
  id,
  transactionId,
  userInfo,
  createdAt,
  total,
  cardNumber,
  cardType,
  location,
}) => (
  <tr id={`order_${id}`}>
    <td>{transactionId}</td>
    <User {...userInfo} />
    <td>{moment(createdAt * 1000).format('DD/MM/YYYY h:mm:ss a')}</td>
    <td>${total}</td>
    <td>{cardNumber}</td>
    <td>{cardType}</td>
    <td>{location}</td>
  </tr>
);

Order.propTypes = {
  id: PropTypes.number.isRequired,
  transactionId: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  cardNumber: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Order;
