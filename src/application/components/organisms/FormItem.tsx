import { Col, Row } from "reactstrap";
import React from "react";
import "./FormItem.scss";

export interface FormItemProps {
  name: string;
  children: React.ReactNode;
}

function FormItem(props: FormItemProps) {
  return (
    <Row className="mt-3 form-item">
      <Col xs={12} sm={5} className={"option-name__container"}>
        <span className="option-name__value">{props.name}:</span>
      </Col>
      <Col xs={12} sm={7}>
        {props.children}
      </Col>
    </Row>
  );
}

export default FormItem;
