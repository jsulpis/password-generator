import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import {
  LOWERCASES,
  NUMBERS,
  SPECIAL_CHARACTERS,
  UPPERCASES
} from "../../../domain/characters";

describe("App", () => {
  let container: HTMLElement;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);

    act(() => {
      render(<App />, container);
    });
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  it("generates a password with default options", () => {
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
      // Leave only numbers
      clickOnButtonsWithId(
        UPPERCASES,
        LOWERCASES,
        SPECIAL_CHARACTERS,
        "btn-submit"
      );
    });

    const password = document.querySelector(".password__value")!.textContent;
    expect(password).toBeTruthy();
    expect(Number(password)).toBeTruthy();

    expect(document.querySelector(".password__message")).toBeFalsy();
  });

  it("generates an empty password if all options are disabled and display a custom message", () => {
    act(() => {
      clickOnButtonsWithId(
        UPPERCASES,
        LOWERCASES,
        NUMBERS,
        SPECIAL_CHARACTERS,
        "btn-submit"
      );
    });

    expect(document.querySelector(".password__value")).toBeFalsy();
    expect(
      document.querySelector(".password__message")!.textContent
    ).toBeTruthy();
  });

  it("copies a password to the clipboard", () => {
    document.execCommand = jest.fn();

    act(() => {
      document.getElementById("btn-submit")!.click();
      document.querySelector<any>(".password__value").click();
    });

    expect(document.execCommand).toHaveBeenCalledWith("copy");
  });

  it("should display the strength indicator if a password is present", () => {
    expect(document.querySelector(".strength-indicator")).toBeTruthy();
  });

  it("should not display the strength indicator if no password", () => {
    act(() => {
      clickOnButtonsWithId(
        UPPERCASES,
        LOWERCASES,
        NUMBERS,
        SPECIAL_CHARACTERS,
        "btn-submit"
      );
    });
    expect(document.querySelector(".strength-indicator")).toBeFalsy();
  });
});

function clickOnButtonsWithId(...ids: string[]) {
  ids.forEach(id => document.getElementById(id)!.click());
}
