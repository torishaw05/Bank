

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withdrawFunds} from '../actions/index';
import {Link} from 'react-router-dom';

class Transaction extends Component {
    render() {
      return (
        <div className='Transaction'>
        <h3 className='withdraw_funds'> Withdraw Funds</h3>
        <h5 className= 'account_type'>{this.props.account.accountType} account for {this.props.user.name} </h5>
        <div className='your_balance'> Your Current Balance: {this.props.account.balance} </div>
        <h3 className='select_amount'> Please Select the Amount You Would Like to Withdraw: </h3>

        <div className='group_button'>
        <button onClick={() => this.props.withdrawFunds(5)} type='button' className='buttons'>$5</button>
        <button onClick={() => this.props.withdrawFunds(10)} type='button' className='buttons'>$10</button>
        <button onClick={() => this.props.withdrawFunds(20)} type='button' className='buttons'>$20</button>
        </div>
        <button className='cancel' onClick={this.props.closeModal}>Go Back</button>
        </div>
      )
    }
  }
function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
return {
  account: state.users[userIdx].accounts[accountIdx],
  user: state.users[userIdx]
};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    withdrawFunds: withdrawFunds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
