import React from "react";
import Slider from "nouislider";
import "./LengthSlider.scss";
import {Col, Row} from "reactstrap";

interface LengthSliderProps {
  value: number,
  onChange: (length: number) => any;
}

class LengthSlider extends React.Component<LengthSliderProps> {

  componentDidMount() {
    const sliderRef = this.refs.slider as HTMLElement;
    const sliderOptions = {
      start: [this.props.value],
      connect: [true, false],
      step: 1,
      range: {min: 4, max: 30}
    };
    const slider = Slider.create(sliderRef, sliderOptions);
    slider.on("update", this.updateValue);
  }

  updateValue = (values: number[]) => {
    this.props.onChange(values[0]);
  };

  render() {
    const value = this.props.value;
    return (
      <Row className="input-slider-container">
        <Col xs={1} className="column-value">
                    <span className="value">
                        {Math.trunc(value)}
                    </span>
        </Col>
        <Col xs={11} className="column-slider">
          <div className="slider" ref="slider"/>
        </Col>
      </Row>
    );
  }
}

export default LengthSlider;