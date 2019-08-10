import {Col, Row} from "reactstrap";
import React from "react";
import "./FormItem.scss";

export interface FormItemProps {
  name: string,
  children: React.ReactNode;
}

function FormItem(props: FormItemProps) {
  return (
    <Row className="mt-2">
      <Col xs={4} className={"option-name__container"}>
        <p className="option-name__value">{props.name}:</p></Col>
      <Col xs={6}>{props.children}</Col>
    </Row>
  )
}

export default FormItem;
