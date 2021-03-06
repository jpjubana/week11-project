import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount }  from '../actions/index';

//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';

//import router Link
import { Link } from 'react-router-dom';


class UserDetail extends Component {

  render() {
    if(!this.props.user) {
      return (
        <div>Please select a user...</div>
      )
    }
    //get user id from params of URL
    const { id } = this.props.match.params;

    //map over the accounts for the user to create links to them.
    let accounts = this.props.user.accounts.map(account => {

      //creating a Link with the account type for
      //each account.

      return (
        <div key={account.id}>
          <Link
            onClick={() => this.props.selectAccount(account.id)}
            to={`/users/${id}/${account.id}`}>{account.accountType}</Link>
        </div>
      )
    })

    return (
      <div style={{marginTop: '50px'}} className="container col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.user.name}</h6>
            <div className= "card-text">
              <div>{this.props.user.email}</div>
              <div>{this.props.user.phone}</div>
              <div>{this.props.user.address}</div>
            </div>
            {accounts}
          </div>
          <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const user = state.users.find(user => user._id === state.selectedUser);
  return {
    user,
    account: user.accounts.find(account => account.id === state.selectedAccount)
  };
}

/*

You will need to create a mapDispatchToProps function here and
return the action creator selectAccount - HINT: see the UserList
component.

*/

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        selectAccount: selectAccount
    }, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(UserDetail);
