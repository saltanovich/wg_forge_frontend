import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heading extends Component {
  titles = [
    { name: 'Transaction ID', value: 'transactionId' },
    { name: 'User Info', value: 'fullName' },
    { name: 'Order Date', value: 'createdAt' },
    { name: 'Order Amount', value: 'total' },
    { name: 'Card Number' },
    { name: 'Card Type', value: 'cardType' },
    { name: 'Location', value: 'location' },
  ];

  render() {
    const {
      sortedBy,
      onSortChange,
      search,
      searchValue,
    } = this.props;
    const titles = this.titles.map(({ name, value }) => (
      <th key={name} onClick={() => onSortChange(value)} style={value ? { cursor: 'pointer' } : null}>
        {name} {(value === sortedBy && value !== null) ? <span>&#8595;</span> : null}
      </th>
    ));
    return (
      <thead className="thead-light">
        <tr>
          {titles}
        </tr>
        <tr>
          <th>Search:</th>
          <th><input type="text" id="search" value={searchValue} onChange={e => search(e)} /></th>
        </tr>
      </thead>
    );
  }
}

Heading.propTypes = {
  sortedBy: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
};

Heading.defaultProps = {
  sortedBy: null,
  searchValue: null,
};

export default Heading;
