import React from 'react'
import "../Styles/Store.scss"

const Account = () => {
  return (
    <div className='store'>
      <h1>Account</h1>
      <div className="personal">
          <div className="header">
            <h3>My Details</h3>
            <h3>Edit</h3>
          </div>
          <div className="details">
            <span>Email</span>
            <h4>bhavdeepkaushal392@gmail.com</h4>
            <span>Name</span>
            <h4>Bhavdeep Kaushal</h4>
            <span>Address</span>
            <h4>ward no 3, Bhajan Colony Banur</h4>
            
          </div>
      </div>
    </div>
  )
}

export default Account