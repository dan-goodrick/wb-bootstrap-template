import { Col, Container, Row } from "react-bootstrap";

export default function OrderExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" md={{span:3, order:2}}>
          <h1>Table of contents</h1>
          <p>On top for lsmall screens, right for medium screens</p>
        </Col>
        <Col xs="12" md={{span:9, order:1}}>
          <h1>Article</h1>
          <p>On bottom for small screens, left for medium screens</p>
        </Col>
      </Row>
    </Container>
  );
}
