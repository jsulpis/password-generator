import React from "react";
import PasswordForm from "./PasswordForm";
import {GeneratorOptions} from "../../domain/models/GeneratorOptions";
import PasswordGenerator from "../../domain/PasswordGenerator";
import {Alert, Container} from "reactstrap";
import "./App.scss";

interface AppState {
  password: string;
  displaySuccessMessage: boolean;
}

class App extends React.Component<any, AppState> {

  readonly DEFAULT_MESSAGE = "Choose some options above and click on Generate!";
  readonly TIP_MESSAGE = "Tip: click on your password to copy it to the clipboard !";
  readonly COPY_SUCCESS = "Your password has been copied to the clipboard.";

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      displaySuccessMessage: false
    };
  }

  render() {
    const password = this.state.password;
    const passwordElement = <span id="password" className="display-4 password__value"
                                  onClick={this.copyPasswordToClipboard}>{password}</span>;
    const messageElement = <span className="heading-3 password__message">{this.DEFAULT_MESSAGE}</span>;
    return (
      <main className="bg-secondary">
        <h2 className="text-center mt-5 display-3">Password Generator</h2>
        <section>
          <PasswordForm onSubmit={this.generatePassword}/>
        </section>
        <section>
          <Container>
            <div className="password-box">
              {password ? passwordElement : messageElement}
            </div>
            {password && <p className="text-center">{this.TIP_MESSAGE}</p>}
            <textarea id="copy-password" value={password} readOnly/>
            <Alert className={this.state.displaySuccessMessage ? 'alert--show' : 'alert--hide'} color="success">
              <i className="ni ni-check-bold"/>{this.COPY_SUCCESS}
            </Alert>
          </Container>
        </section>
      </main>
    );
  }

  private generatePassword = (length: number, options: GeneratorOptions) => {
    const password = new PasswordGenerator().generatePassword(length, options);
    this.setState({password});
  };

  private copyPasswordToClipboard = () => {
    document.querySelector<any>("#copy-password")!.select();
    document.execCommand('copy');
    this.setState({displaySuccessMessage: true});
    setTimeout(() => this.setState({displaySuccessMessage: false}), 2000);
  }
}

export default App;
