import React from 'react';
import {connect} from 'react-redux';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
import { bindActionCreators } from 'redux';

class AccountDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    render(){
        return(
            <div>
                <div style={{marginTop: '50px'}} className="container col-md-6">
                    <div className= "card">
                    <div className= "card-block">
                        <h4 className= "card-title">Account Information</h4>
                        <h6 className= "card-subtitle mb-2 text-muted">{this.props.user.name}'s {this.props.account.accountType}</h6>
                        <div className= 'card-text'>
                            <div>Account Balance: {this.props.account.balance}</div>
                        </div>
                        <br/>
                        <div>
                            <Button color="danger" onClick={this.toggle} block>Withdraw Funds</Button>
                        </div>
                    </div>
                    <Link className="btn btn-primary" to="/users/:id" >Back to User Detail</Link>
                    </div>
                </div>

                <Modal style={{maxWidth: '800px'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Make a withdrawal</ModalHeader>
                <ModalBody>
                    Please pick an amount to withdraw from your {this.props.account.accountType} account.
                    <br/>
                    <br/>   
                    Account Balance: {this.props.account.balance.toFixed(2)}
                    <br/>
                </ModalBody>
                <ModalFooter>
                    Choose amount: &nbsp;
                    <ButtonGroup style={{marginRight: '130px'}}>
                        <Button onClick={() => this.props.withdrawFunds(5)} color="secondary">$5</Button>{' '}
                        <Button onClick={() => this.props.withdrawFunds(10)} color="primary">$10</Button>{' '}
                        <Button onClick={() => this.props.withdrawFunds(15)} color="success">$15</Button>{' '}
                        <Button onClick={() => this.props.withdrawFunds(20)} color="info">$20</Button>{' '}
                        <Button onClick={() => this.props.withdrawFunds(25)} color="warning">$25</Button>{' '}
                        <Button onClick={() => this.props.withdrawFunds(30)} color="danger">$30</Button>{' '}
                    </ButtonGroup>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const user = state.users.find(user => user._id === state.selectedUser);
    return {
        user,
        account: user.accounts.find(account => account.id === state.selectedAccount)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        selectAccount: selectAccount,
        withdrawFunds: withdrawFunds
    }, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(AccountDetail);