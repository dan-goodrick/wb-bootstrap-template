import { Col, Container, Row } from "react-bootstrap";
// span determines the width of the element
// className='border-0'
export default function OffsetExample() {
  return (
<Container fluid>
  <Row className='no-border'>
    <Col  xs= {{offset:3, span:6}}>
      <img src='../../img/puppy.png'/>
    </Col>
  </Row>
</Container>
  );
}
