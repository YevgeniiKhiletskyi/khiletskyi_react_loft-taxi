import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from './App'

jest.mock('./Header/Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('./Header/Profile', () => ({Map: () => <div>Profile component</div>}))
jest.mock('./Header/Login', () => ({Map: () => <div>Login component</div>}))

describe('App', () => {
  it.todo("renders correctly", () => {
    const {container} = render(<App />)
    expect(container.innerHTML).toMach("Map component")
  })

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const {getByText, container} = render(<App />)

      fireEvent.click(getByText('Profile'))
      expect(container.innerHTML).toMatch("Profile component")
      fireEvent.click(getByText('Login'))
      expect(container.innerHTML).toMatch("Login component")
    })
  })
})
