import React, { useState } from 'react'

export default function Todo() {
    const [clicked, setClicked] = useState(false)
  return (
    <div>
        <button onClick={()=>setClicked(true)}>Open</button>
      {clicked &&  <><button onClick={()=>setClicked(false)}>Close</button></>}
    </div>
  )
}
