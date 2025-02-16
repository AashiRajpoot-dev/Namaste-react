import React from 'react'
import { useState } from 'react'

const User = ({name}) => {
    const [count] = useState(0);
    const [coun2] = useState(2);
  return (
    <div className="user-card">
    <h1>{`Count - ${count}`}</h1>
    <h1>{`Count2 - ${coun2}`}</h1>
    <h2>Name:{name}</h2>
    <h3>Location:Jabalpur</h3>
    <h4>Contact:aashiwork2022@gmail.com</h4>
  </div>
  )
}

export default User
