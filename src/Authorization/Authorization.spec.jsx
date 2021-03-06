import React from 'react';
import {AuthProvider, Authorization} from "./Authorization";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe('Authorization', () => {
  describe('#logIn', () => {
    it('sets "isLoggedIn" to false', () => {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <Authorization.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </Authorization.Consumer>
        </AuthProvider>
      )

      expect(isLoggedIn).toBe(false)
      act(() => {
        logIn("valid@email.com", "123");
      })
      expect(isLoggedIn).toBe(true)
    })
  })
})