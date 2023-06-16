import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../redux/slices/User'

function Profile() {
  const {userProfile} = useSelector(state=>state.UserReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const actionThunk = getProfileThunk();
    dispatch(actionThunk)
  }, [])
  return (
    <div>
      <img src={userProfile.avatar} alt="" style={{width:200,height:200}}/>
      <p htmlFor="">Email</p>
      <p>{userProfile.email}</p>
    </div>
  )
}

export default Profile