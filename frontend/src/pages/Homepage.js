import React, { useEffect, useRef } from 'react'
import "../Styles/Homepage.scss"
import Navbar from '../components/Navbar'
import Item from '../components/Item'

const Homepage = () => { 
  return (
    <div className='homepage'>
      <Navbar/>
      <div className="videoDiv">
        <video src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/i1mRN67J9G_HD.mp4" autoPlay loop  id="autoplay" muted/>
      </div>
      <div className="trending">
        <h1 className='heading'>TRENDING</h1>
        <h5 className='desc'>HOTTEST ITEMS</h5>

        <div className="items">
          <Item />
        </div>
      </div>
    </div>
    
  )
}

export default Homepage