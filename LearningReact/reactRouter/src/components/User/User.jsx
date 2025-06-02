import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center text-blue-400 bg-gray-200 h-100 text-3xl'>User: {id}</div>
  )
}

export default User