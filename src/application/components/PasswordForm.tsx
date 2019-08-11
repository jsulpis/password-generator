import React from "react";
import LengthSlider from "./atoms/LengthSlider";
import {Button, Container} from "reactstrap";
import FormItem from "./organisms/FormItem";
import CheckBox from "./atoms/CheckBox";
import {LOWERCASES, NUMBERS, SPECIAL_CHARACTERS, UPPERCASES} from "../../domain/characters";
import {OptionName} from "../../domain/models/OptionName";
import {GeneratorOptions} from "../../domain/models/GeneratorOptions";

interface FormState {
  length: number;
  options: GeneratorOptions
}

interface FormProps {
  onSubmit: (length: number, options: GeneratorOptions) => any;
}

class PasswordForm extends React.Component<FormProps, FormState> {

  constructor(props: any) {
    super(props);
    this.state = {
      length: 12,
      options: {
        uppercases: true,
        lowercases: true,
        numbers: true,
        specialCharacters: true
      }
    }
  }

  componentDidMount(): void {
    const {length, options} = this.state;
    this.props.onSubmit(length, options);
  }

  render() {
    const {length, options} = this.state;
    return (
      <Container>
        <form onSubmit={this.onFormSubmit}>
          <FormItem name="Length">
            <LengthSlider value={length} onChange={this.onChangeLength}/>
          </FormItem>
          <FormItem name="Uppercases">
            <CheckBox value={options.uppercases} label={UPPERCASES}
                      onChange={(val) => this.onChangeOption(OptionName.uppercases, val)}/>
          </FormItem>
          <FormItem name="Lowercases">
            <CheckBox value={options.lowercases} label={LOWERCASES}
                      onChange={(val) => this.onChangeOption(OptionName.lowercases, val)}/>
          </FormItem>
          <FormItem name="Numbers">
            <CheckBox value={options.numbers} label={NUMBERS}
                      onChange={(val) => this.onChangeOption(OptionName.numbers, val)}/>
          </FormItem>
          <FormItem name="Special characters">
            <CheckBox value={options.specialCharacters} label={SPECIAL_CHARACTERS}
                      onChange={(val) => this.onChangeOption(OptionName.specialCharacters, val)}/>
          </FormItem>
          <div className="text-center mt-4">
            <Button id="btn-submit" color="primary" type="submit">
              Generate
            </Button>
          </div>
        </form>
      </Container>)
  }

  private onChangeLength = (length: number) => {
    this.setState({length});
  };

  private onChangeOption = (option: OptionName, value: boolean) => {
    const currentOptions = this.state.options;
    const optionsUpdated = Object.assign(currentOptions, {[option]: value});
    this.setState({options: optionsUpdated});
  };

  private onFormSubmit = (e) => {
    e.preventDefault();
    const {length, options} = this.state;
    this.props.onSubmit(length, options);
  }
}

export default PasswordForm;
