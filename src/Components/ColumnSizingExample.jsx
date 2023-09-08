import { Col, Container, Row } from "react-bootstrap";

export default function ColumnSizingExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='9'>width 9</Col>
        <Col xs='3'>width 3</Col>
      </Row>
      <Row>
        <Col>Column</Col>
        <Col xs='6'>Column width 6</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  );
}
