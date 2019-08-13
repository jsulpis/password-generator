import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import PasswordForm from "../PasswordForm";
import {LOWERCASES, NUMBERS, SPECIAL_CHARACTERS, UPPERCASES} from "../../../domain/characters";

describe("PasswordForm", () => {

  let container: HTMLElement;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);

    act(() => {
      render(<PasswordForm onSubmit={() => {
      }}/>, container);
    });
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  it("mount with default values", () => {
    expectCheckBoxWithIdToBeChecked(UPPERCASES);
    expectCheckBoxWithIdToBeChecked(LOWERCASES);
    expectCheckBoxWithIdToBeChecked(NUMBERS);
    expectCheckBoxWithIdToBeChecked(SPECIAL_CHARACTERS);
    expect(document.getElementById("slider-value")!.textContent).toBe("12");
  })
});

function expectCheckBoxWithIdToBeChecked(id: string) {
  // @ts-ignore
  expect(document.getElementById(id)!.checked).toBe(true);
}
