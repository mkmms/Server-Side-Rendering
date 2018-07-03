import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/index';
import requireAuth from '../components/hoc/requireAuth';


class AdminsList extends Component{
  componentDidMount(){
    this.props.fetchAdmins();
  }

  renderAdminsList(){
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render(){

    return (
      <div>
        Here is the List of Admins

        
        <ul>
          { this.renderAdminsList() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  admins: state.admins
})

const mapDispatchToProps = (dispatch) => ({
  fetchAdmins: () => dispatch( fetchAdmins() )
})

export const loadData = (store) => {
  return store.dispatch( fetchAdmins() );
}


export default {
  loadData,
  component: connect(mapStateToProps,mapDispatchToProps)(
    requireAuth(AdminsList)
  ),
}