import React from 'react'
import { withAuth } from '../Authorization/Authorization'


export const Profile = () => {
  return <>
    <h1>Profile</h1>
  </>
}

export const ProfileWithAuth = withAuth(Profile)