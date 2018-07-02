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
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">SSR</Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <Link to="/admins">admins</Link>
          </li>
          <li>
            { authButton }
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(
  mapStateToProps
)(Header)