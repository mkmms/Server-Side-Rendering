import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions/index';



class UsersList extends Component{
  componentDidMount(){
    this.props.fetchUsers();
  }

  renderUsersList(){
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head(){
    return (
      <Helmet>
        <title>{ `${this.props.users.length} Users loaded` }</title>
        <meta type='description' content='User Lis Page'></meta>
      </Helmet>
    )
  }

  render(){

    return (
      <div>
        Here is the List of Users
        
        {this.head()}
        <ul>
          { this.renderUsersList() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch( fetchUsers() )
})

export const loadData = (store) => {
  return store.dispatch( fetchUsers() );
}


export default {
  loadData,
  component: connect(mapStateToProps,mapDispatchToProps)(UsersList),
}