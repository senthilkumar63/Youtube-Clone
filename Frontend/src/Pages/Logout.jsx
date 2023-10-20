import React from 'react'

const Logout = () => {
    const logout = () =>{
        window.open('http://localhost:5000/auth/logout', '_self')
    }
  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout