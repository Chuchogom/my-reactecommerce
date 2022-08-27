import React from 'react'
import { Link } from 'react-router-dom'
import './MyAccount.css'

const MyAccount = () => {
  return (
    <>
      <div className="my-account">
          <div className="account-container">
              <h1 className="account-title">My account</h1>
              <form action="/" className="account-form">
                  <div>
                      <label htmlFor="name" className="account-label">Name</label>
                      <p className="value">Jesus Gomez</p>
                      <label htmlFor="email" className="account-label">Email</label>
                      <p className="value">example@gmail.com</p>
                      <label htmlFor="password" className="account-label">Password</label>
                      <p className="account-value">*********</p>
                  </div>
                  <input type="submit" defaultValue="Edit" className="account-button account-login" />
              </form>
          </div>
      </div>
    </>

  )
}

export default MyAccount