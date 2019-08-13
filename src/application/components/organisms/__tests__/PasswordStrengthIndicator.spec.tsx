import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import PasswordStrengthIndicator from "../PasswordStrengthIndicator";

describe("PasswordStrengthIndicator", () => {

  let container: HTMLElement;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  function verifyPasswordLabel(password: string, expectedLabel: string) {
    act(() => {
      render(<PasswordStrengthIndicator password={password}/>, container);
    });
    expect(document.querySelector(".strength-label")!.textContent).toBe(expectedLabel);
  }

  it("handles very weak passwords", () => {
    verifyPasswordLabel("oNxL", "Very Weak");
  });

  it("handles weak passwords", () => {
    verifyPasswordLabel("6pq4gq", "Weak");
  });

  it("handles good passwords", () => {
    verifyPasswordLabel("4oisg657", "Good");
  });

  it("handles strong passwords", () => {
    verifyPasswordLabel("9kwwq1ltms", "Strong");
  });

  it("handles very strong passwords", () => {
    verifyPasswordLabel("9aXmHZpj1z", "Very Strong");
  });
});
