import React from 'react'
import "../Styles/Item.scss"

const Item = () => {
  return (
    <div className='item'>
        <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1836-04-M4676_1800x1800.jpg?v=1687346625" alt="" />
        <div className="footer">
            <h4>Red Color Shirt</h4>
            <span>Rs. 999</span>
        </div>
    </div>
  )
}

export default Item