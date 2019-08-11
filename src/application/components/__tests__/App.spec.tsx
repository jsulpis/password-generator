import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import App from "../App";
import {LOWERCASES, NUMBERS, SPECIAL_CHARACTERS, UPPERCASES} from "../../../domain/characters";

describe("App", () => {

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

  it("generates a password with default options", () => {
    act(() => {
      render(<App/>, container);
    });

    act(() => {
      document.getElementById("btn-submit")!.click();
    });

    const password = document.querySelector(".password__value")!.textContent;
    expect(password).toBeTruthy();
    const passwordMinLength = 4;
    expect(password!.length).toBeGreaterThanOrEqual(passwordMinLength);

    const customMessage = document.querySelector(".password__message");
    expect(customMessage).toBeFalsy();
  });

  it("generates a password with the chosen options", () => {
    act(() => {
      render(<App/>, container);
    });

    act(() => {
      // Leave only numbers
      clickOnButtonsWithId(UPPERCASES, LOWERCASES, SPECIAL_CHARACTERS, "btn-submit");
    });

    const password = document.querySelector(".password__value")!.textContent;
    expect(password).toBeTruthy();
    expect(Number(password)).toBeTruthy();

    expect(document.querySelector(".password__message")).toBeFalsy();
  });

  it("generates an empty password if all options are disabled and display a custom message", () => {
    act(() => {
      render(<App/>, container);
    });

    act(() => {
      clickOnButtonsWithId(UPPERCASES, LOWERCASES, NUMBERS, SPECIAL_CHARACTERS, "btn-submit");
    });

    expect(document.querySelector(".password__value")).toBeFalsy();
    expect(document.querySelector(".password__message")!.textContent).toBeTruthy();
  });
});

function clickOnButtonsWithId(...ids: string[]) {
  ids.forEach(id => document.getElementById(id)!.click());
}
