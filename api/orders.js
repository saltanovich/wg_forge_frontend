import moment from 'moment';
import usersData from '../data/users.json';
import companiesData from '../data/companies.json';
import ordersData from '../data/orders.json';

const formatCardNumber = (cardNumber) => {
  const firstVisible = cardNumber.substring(0, 2);
  const stars = '*'.repeat(cardNumber.length - 6);
  const lastVisible = cardNumber.substring((cardNumber.length - 4), cardNumber.length);
  return `${firstVisible}${stars}${lastVisible}`;
};

const users = usersData.map(user => ({
  id: user.id,
  fullName: `${user.first_name} ${user.last_name}`,
  gender: user.gender,
  avatar: user.avatar,
  birthday: moment(user.birthday * 1000).format('DD/MM/YYYY'),
  companyInfo: companiesData.find(company => company.id === user.company_id),
}));

export default ordersData.map(order => ({
  id: order.id,
  transactionId: order.transaction_id,
  createdAt: order.created_at, // moment(order.created_at * 1000).format('DD/MM/YYYY h:mm:ss a'),
  total: parseFloat(order.total),
  cardType: order.card_type,
  cardNumber: formatCardNumber(order.card_number),
  location: `${order.order_country} (${order.order_ip})`,
  userInfo: users.find(user => user.id === order.user_id),
}));
