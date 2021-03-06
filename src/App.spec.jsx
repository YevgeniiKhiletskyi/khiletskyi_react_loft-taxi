import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from './App'

jest.mock('./Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('./Profile', () => ({Profile: () => <div>Profile component</div>}))
jest.mock('./Login', () => ({Login: () => <div>Login component</div>}))

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
