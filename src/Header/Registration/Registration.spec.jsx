import React from 'react'
import {Registration} from './Login'
import {render} from '@testing-library/react'

describe("registration", () => {
  it("render correctly", () => {
    const {getByLabelText} = render(<Registration />)

    expect(getByLabelText('Email: ')).toHaveAttribute('name', 'email')
    expect(getByLabelText('FirstName: ')).toHaveAttribute('name', 'firstName')
    expect(getByLabelText('LastName: ')).toHaveAttribute('name', 'lastName')
    expect(getByLabelText('Password: ')).toHaveAttribute('name', 'password')
  })
})