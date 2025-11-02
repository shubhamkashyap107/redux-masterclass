import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Utils/User/UserActions'

const User = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.user.data)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
  return (
    <div>
      {data.length > 0 && data.map((item) => {
        return <h3>{item.name}</h3>
      })}
    </div>
  )
}

export default User
