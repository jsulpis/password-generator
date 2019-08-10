import React from "react";
import PasswordForm from "./PasswordForm";
import {FormState} from "./FormState";

class App extends React.Component<any, FormState> {

  constructor(props: any) {
    super(props);
    this.state = {
      length: 8,
      options: {}
    }
  }

  render() {
    return (
      <main>
        <h2 className="text-center mt-4 display-3">Password Generator</h2>
        <section className="section">
          <PasswordForm state={this.state} onChange={this.updateState}/>
        </section>
      </main>
    );
  }

  updateState = (partialState: Partial<FormState>) => {
    // @ts-ignore
    this.setState(partialState);

  }
}

export default App;
