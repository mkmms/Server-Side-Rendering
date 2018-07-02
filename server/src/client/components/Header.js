import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = ( {auth} ) => {

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  )

  return (
    <div>
      <Link to="/">SSR</Link>
      <div>
        <Link to="/users">users</Link>
        <Link to="/admins">admins</Link>
        { authButton }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(
  mapStateToProps
)(Header)