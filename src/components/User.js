import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Company from './Company';

class User extends Component {
  constructor() {
    super();
    this.state = {
      displayUserData: false,
    };
    this.showUserData = this.showUserData.bind(this);
  }

  showUserData(e) {
    e.preventDefault();
    this.setState(prevState => (
      {
        displayUserData: !prevState.displayUserData,
      }
    ));
  }

  render() {
    const {
      fullName,
      gender,
      birthday,
      avatar,
      companyInfo,
    } = this.props;
    const { displayUserData } = this.state;
    return (
      <td className="user-data">
        <a href="#" onClick={this.showUserData}>{gender === 'Male' ? 'Mr.' : 'Ms.'} {fullName}</a>
        <div className="user-details" style={displayUserData ? { display: 'block' } : { display: 'none' }}>
          <p>{birthday}</p>
          <p><img alt="" src={avatar} width="100px" /></p>
          {companyInfo ? <Company {...companyInfo} /> : null}
        </div>
      </td>
    );
  }
}

User.propTypes = {
  fullName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  companyInfo: PropTypes.object,
};
User.defaultProps = {
  companyInfo: null,
};

export default User;
