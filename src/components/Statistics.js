import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ orders }) => {
  const calculateStats = () => {
    const ordersQty = orders.length;
    if (ordersQty === 0) {
      return {
        ordersQty: 'n/a',
        total: 'n/a',
        median: 'n/a',
        average: 'n/a',
        averageMale: 'n/a',
        averageFemale: 'n/a',
      };
    }
    const total = orders.reduce((acc, item) => acc + item.total, 0).toFixed(2);
    const calcMedian = () => {
      const values = orders
        .map(order => order.total)
        .sort((a, b) => a - b);
      if (values.length === 0) return 'n/a';
      const half = Math.floor(values.length / 2);
      if (values.length % 2) return values[half];
      return ((values[half - 1] + values[half]) / 2).toFixed(2);
    };
    const average = (total / ordersQty).toFixed(2);
    const calcAverageByGender = (gender) => {
      const filteredByGender = orders
        .filter(order => order.userInfo.gender === gender)
        .map(order => order.total);
      const filteredByGenderAmount = filteredByGender.reduce((acc, value) => acc + value, 0);
      const result = (filteredByGenderAmount / filteredByGender.length).toFixed(2);
      return isNaN(result) ? 'n/a' : `$${result}`;
    };
    return {
      ordersQty,
      total: `$${total}`,
      median: `$${calcMedian()}`,
      average: `$${average}`,
      averageMale: calcAverageByGender('Male'),
      averageFemale: calcAverageByGender('Female'),
    };
  };
  const {
    ordersQty,
    total,
    median,
    average,
    averageMale,
    averageFemale,
  } = calculateStats();

  return (
    <table className="table table-dark table-hover">
      <tbody>
        <tr>
          <td>Orders Count</td>
          <td>{ordersQty}</td>
        </tr>
        <tr>
          <td>Orders Total</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Median Value</td>
          <td>{median}</td>
        </tr>
        <tr>
          <td>Average Check</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Average Check (Female)</td>
          <td>{averageFemale}</td>
        </tr>
        <tr>
          <td>Average Check (Male)</td>
          <td>{averageMale}</td>
        </tr>
      </tbody>
    </table>
  );
};

Statistics.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default Statistics;
