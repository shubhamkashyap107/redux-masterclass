import React from 'react'
import { useEffect } from 'react'
import { getUserData } from '../utils/UserSlice'
import { useDispatch, useSelector } from "react-redux"

const User = () => {

    const dispatch = useDispatch()
    const userSliceData = useSelector(store => store.user)
    // console.log(userSliceData)

    useEffect(() => {
        dispatch(getUserData())
    }, [])

  return (
    <div>
        {userSliceData.data.map((item) => {
            return <h1>{item.name}</h1>
        })}
    </div>
  )
}

export default User
