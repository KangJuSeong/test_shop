import './menubanner.scss'
import { useState } from 'react'


export default function MenuBanner () {
  const [ringHover, setRingHover] = useState(false)
  const [neckHover, setNeckHover] = useState(false)
  const [earingHover, setEaringHover] = useState(false)
  const [bracelHover, setBracelHover] = useState(false)

  const handleMouseHover = (item) => {
    if(item == 'ring') {
      setRingHover(!ringHover)
    }
    else if(item == 'neck') {
      setNeckHover(!neckHover)
    }
    else if(item == 'earing') {
      setEaringHover(!earingHover)
    }
    else {
      setBracelHover(!bracelHover)
    }
  }

  return (
    <div className='outline-box'>
      <div className='title-box'>BEST</div>
      <div className='main-box'>
        <div 
          className='menu-banner1'
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHover}>
            {bracelHover&&<div>팔찌</div>}
        </div>
        <div 
          className='menu-banner2'
          onMouseEnter={() => handleMouseHover('neck')}
          onMouseLeave={() => handleMouseHover('neck')}>
            {neckHover&&<div>목걸이</div>}
        </div>
        <div 
          className='menu-banner3'
          onMouseEnter={() => handleMouseHover('ring')}
          onMouseLeave={() => handleMouseHover('ring')}>
            {ringHover&&<div>반지</div>}
          </div>
        <div 
          className='menu-banner4'
          onMouseEnter={() => handleMouseHover('earing')}
          onMouseLeave={() => handleMouseHover('earing')}>
            {earingHover&&<div>귀걸이</div>}
        </div>
      </div>
    </div>
  )
}