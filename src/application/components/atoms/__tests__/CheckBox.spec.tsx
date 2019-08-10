import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import CheckBox from "../CheckBox";

describe("CheckBox", () => {

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

  it("changes value when clicked", () => {
    const onChange = jest.fn(() => {
    });
    act(() => {
      render(<CheckBox value={false} label="test" onChange={onChange}/>, container);
    });

    act(() => {
      // @ts-ignore
      document.getElementById("test").click();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
