//React imports
import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
import {selectUser} from '../actions/index.js'
import { bindActionCreators } from 'redux';
import {withdrawFunds} from '../actions/index';
//react router imports
import { Link } from 'react-router-dom';
import Transaction from './Transaction';
import Modal from 'react-modal';






 class AccountDetail extends Component {
  constructor(props){
  super(props);
  this.state = {isModalOpen: false,};

  this.toggle = this.toggle.bind(this);
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}
toggle(){
  this.setState ({ isModalOpen: !this.state.isModalOpen});
}
openModal() {
  this.setState({isModalOpen: true})
}
closeModal() {
  this.setState({isModalOpen: false})
}





    render() {
      let n=1
      return(

        <div className='account_detail'>
        <div className='buttons'>
        <div className='back'>


        <h4 clasName='account_info'> Account Information </h4>
        <h5 className='type_name'> {this.props.account.accountType} for {this.props.user.name} </h5>
        <h6 className='balance'> Balance : {this.props.account.balance} </h6>

        <Modal isOpen = {this.state.isModalOpen}
               onRequestClose = {this.closeModal}
               closeTimeOutMS = {n}
               shouldCloseOnOverlayClick ={false}
               contentLabel = 'Example Modal'
>

    <Transaction closeModal={this.closeModal}/>
      </Modal>
      </div>





        <button onClick={this.openModal} className='withdraw'> Withdraw Funds </button>



        <Link className = 'goBack' to={`/users/${this.props.user._id}`}> Go Back! </Link>
        </div>
      </div>
      );
    }
  }

  function mapStateToProps(state) {
    console.log("USERS!!!", state.users);
    console.log("CURENNT_USER", state.selectedUser);
    const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
    console.log("INDEX", userIdx);
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
