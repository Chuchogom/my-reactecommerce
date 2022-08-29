import React from 'react'
import { NavLink } from 'react-router-dom'
import './MyAccount.css'
import logo from '../../assets/logoShop.svg'

const MyAccount = () => {
  return (
    <>
      <div className="my-account">
          <div className="account-container">
          <img src={logo} alt="logo shop" className='account-logo'/>
              <h1 className="account-title">Login</h1>
              <form action="/" className="account-form">
                  <div>
                    <label htmlFor="name" className="account-label">Name</label>
                    <p className="value">Jesus Gomez</p>
                    <label htmlFor="email" className="account-label">Email</label>
                    <p className="value">example@gmail.com</p>
                    <label htmlFor="password" className="account-label">Password</label>
                    <p className="account-value">*********</p>
                    <NavLink to='/'>
                      <button type="submit" defaultValue="Edit"  className='account-button account-login'>Login</button>
                    </NavLink>
                  </div>
              </form>
          </div>
      </div>
    </>

  )
}

export default MyAccount