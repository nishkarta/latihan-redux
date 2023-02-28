import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const {bio} = useSelector(state=> state.user)
    const username = localStorage.getItem('username')
    
  return (
    <div>
        <span>{username}</span>
    </div>
  )
}

export default Home