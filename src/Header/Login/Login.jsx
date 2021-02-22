import React from 'react'

export const Login = () => {
  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" name="email" size="28" />
      <lebel htmlFor="password">Password: </lebel>
      <input id="password" type="password" name="password" size="28" />
    </form>
  )
}