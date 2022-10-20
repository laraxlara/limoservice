import React, { useState } from 'react'

import './styles.css'

const Avatar = props => {
    const [hovered, setHovered] = useState(false)

  return (
    <div className='avatar-container'>
      
      <div className='avatar-chat' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => props.onClick && props.onClick()}>
      </div>
    </div>
  )
}

export default Avatar
