import React from "react";
import LengthSlider from "./atoms/LengthSlider";
import {Container} from "reactstrap";
import FormItem from "./FormItem";
import {FormState} from "./FormState";
import CheckBox from "./atoms/CheckBox";
import {UPPERCASES} from "../../domain/characters";

interface PasswordFormProps {
  state: FormState;
  onChange: (partialState: Partial<FormState>) => void;
}

class PasswordForm extends React.Component<PasswordFormProps> {

  render() {
    const state = this.props.state;
    const length = state.length;
    const options = state.options;
    return (
      <Container>
        <FormItem name="Length">
          <LengthSlider value={length} onChange={this.onChangeLength}/>
        </FormItem>
        <FormItem name="Uppercases">
          <CheckBox value={options.uppercases} label={UPPERCASES} onChange={this.onChangeUppercase}/>
        </FormItem>
      </Container>
    );
  }

  onChangeLength = (length: number) => {
    this.props.onChange({length});
  };

  onChangeUppercase = (value: boolean) => {
    this.props.onChange({options: {uppercases: value}});
  }
}

export default PasswordForm;
