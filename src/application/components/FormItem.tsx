import {Col, Row} from "reactstrap";
import React from "react";
import "./FormItem.scss";

export interface FormItemProps {
  name: string,
  children: React.ReactNode;
}

function FormItem(props: FormItemProps) {
  return (
    <Row className="mt-2 form-item">
      <Col xs={5} className={"option-name__container"}>
        <p className="option-name__value">{props.name}:</p></Col>
      <Col>{props.children}</Col>
    </Row>
  )
}

export default FormItem;
