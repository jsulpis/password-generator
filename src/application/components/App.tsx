import React from "react";
import PasswordForm from "./PasswordForm";
import {GeneratorOptions} from "../../domain/models/GeneratorOptions";
import PasswordGenerator from "../../domain/PasswordGenerator";
import {Container} from "reactstrap";
import "./App.scss";

interface AppState {
  password: string;
}

class App extends React.Component<any, AppState> {

  readonly DEFAULT_MESSAGE = "Choose options above and click on Generate!";

  constructor(props) {
    super(props);
    this.state = {password: ""};
  }

  render() {
    const password = this.state.password;
    const passwordElement = <span className="display-4">{password}</span>;
    const messageElement = <span className="heading-3">{this.DEFAULT_MESSAGE}</span>;
    return (
      <main>
        <h2 className="text-center mt-5 display-3">Password Generator</h2>
        <section className="section">
          <PasswordForm onSubmit={this.generatePassword}/>
          <section className="section">
            <Container>
              <div className="password">
                {password ? passwordElement : messageElement}
              </div>
            </Container>
          </section>
        </section>
      </main>
    );
  }

  private generatePassword = (length: number, options: GeneratorOptions) => {
    const password = new PasswordGenerator().generatePassword(length, options);
    this.setState({password});
    console.log(length, options, password);
  }
}

export default App;
