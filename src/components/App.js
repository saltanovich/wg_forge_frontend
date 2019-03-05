import React, { Component } from 'react';
import Heading from './Heading';
import Orders from './Orders';
import Statistics from './Statistics';
import ordersData from '../../api/orders';


class App extends Component {
  static sortOrders(orders, term) {
    return orders.sort((a, b) => {
      if (term === 'fullName') {
        if (a.userInfo.fullName > b.userInfo.fullName) {
          return 1;
        }
        if (a.userInfo.fullName < b.userInfo.fullName) {
          return -1;
        }
      }
      if (a[term] > b[term]) {
        return 1;
      }
      if (a[term] < b[term]) {
        return -1;
      }
      return 0;
    });
  }

  state = {
    orders: ordersData,
    sortedBy: '',
    searchValue: '',
  };

  onSortChange = (term) => {
    if (term) {
      this.setState(prevState => ({
        orders: App.sortOrders(prevState.orders, term),
        sortedBy: term,
      }));
    }
  };

  search = (e) => {
    const { sortedBy } = this.state;
    const inputValue = e.target.value.toLowerCase();
    const sortedOrders = App.sortOrders(ordersData, sortedBy);
    const query = (order) => {
      const {
        transactionId,
        userInfo,
        total,
        cardType,
        location,
      } = order;
      return transactionId.toLowerCase().indexOf(inputValue) > -1
      || userInfo.fullName.toLowerCase().indexOf(inputValue) > -1
      || total.toString().indexOf(inputValue) > -1
      || cardType.toLowerCase().indexOf(inputValue) > -1
      || location.toLowerCase().indexOf(inputValue) > -1;
    };
    this.setState({
      orders: sortedOrders.filter(query),
      searchValue: e.target.value,
    });
  };


  render() {
    const { orders, sortedBy, searchValue } = this.state;
    return (
      <React.Fragment>
        <table className="table">
          <Heading
            sortedBy={sortedBy}
            onSortChange={this.onSortChange}
            search={this.search}
            searchValue={searchValue}
          />
          <tbody>
            {orders.length > 0 ? <Orders orders={orders} /> : <tr><td>Nothing found</td></tr>}
          </tbody>
        </table>
        <Statistics orders={orders} />
      </React.Fragment>
    );
  }
}

export default App;
