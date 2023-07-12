import React from 'react'
import "../Styles/Store.scss"
import Item from "./Item"

const Store = () => {
  return (
    <div className='store'>
        <h1>My Store</h1>
        <div className="items">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>
  )
}

export default Store