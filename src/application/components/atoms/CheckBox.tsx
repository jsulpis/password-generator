import React from "react";

interface CheckBoxProps {
  value: boolean | undefined;
  label: string;
  onChange: (value: boolean) => any;
}

class CheckBox extends React.Component<CheckBoxProps> {
  public render() {
    const checked = !!this.props.value;
    const label = this.props.label;

    return (
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          id={label}
          type="checkbox"
          checked={checked}
          onChange={this.onValueChange}
        />
        <label className="custom-control-label" htmlFor={label}>
          <span>{label}</span>
        </label>
      </div>
    );
  }

  public onValueChange = event => {
    this.props.onChange(event.target.checked);
  };
}

export default CheckBox;
